const knex = require('./knex.js');

module.exports = {
    getBreweries: function(){
        // Return a promise that gets all breweries
        return knex('breweries');
    },
    getBrewery: function(brewery_id){
        // Return a promise that gets one brewery that matches the id
        return knex('breweries').where('id',brewery_id).first();
    },
    getBeers: function(){
        // Return a promise that gets all beers where the beer name is set to the property beer_name
        // Each beer should also have a property with the name of it's brewery called brewery_name
        return knex('beers')
        .innerJoin('breweries', 'brewery_id', 'breweries.id').select('beers.name AS beer_name', 'breweries.name AS brewery_name', 'beers.*', 'breweries.*');
    },
    getBeersByBrewery: function(brewery_id){
        // Return a promise that gets all beers for a single brewery
        // Where the beer name is set to the property beer_name
        // Each beer should also have a property with the name of it's brewery called brewery_name
        return knex('beers')
        .innerJoin('breweries', 'brewery_id', 'breweries.id').select('beers.name AS beer_name', 'breweries.name AS brewery_name', 'beers.*', 'breweries.*').where('brewery_id', brewery_id);
    }
};
