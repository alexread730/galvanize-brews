
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
  return knex('beers').del()
    .then(function() {

      return knex('beers').insert([
        // Inserts seed entries
        {
          name: 'Yellow Fever',
          abv: 5.0,
          brewery_id: 1
        },
        {
          name: 'Redcon',
          abv: 5.7,
          brewery_id: 1
        },
        {
          name: 'True Blonde Ale',
          abv: 5.0,
          brewery_id: 2
        },
        {
          name: 'Modus Hoperandi IPA',
          abv: 6.8,
          brewery_id: 2
        }
      ]);
    });
};
