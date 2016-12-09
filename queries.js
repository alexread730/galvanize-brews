

module.exports = {
    getBreweries: function(){
        // Return a promise that gets all breweries
    },
    getBrewery: function(brewery_id){
        // Return a promise that gets one brewery that matches the id
    },
    getBeers: function(){
        // Return a promise that gets all beers where the beer name is set to the property beer_name
        // Each beer should also have a property with the name of it's brewery called brewery_name
    },
    getBeersByBrewery: function(brewery_id){
        // Return a promise that gets all beers for a single brewery
        // Where the beer name is set to the property beer_name
        // Each beer should also have a property with the name of it's brewery called brewery_name
    }
};
