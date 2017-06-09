
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('breweries').del()
    .then(function() {
      return knex('breweries').insert([
          {
            name: 'Comrade',
            city: 'Denver',
            state: 'CO'
          },
          {
            name: 'Ska',
            city: 'Durango',
            state: 'CO'
          }
        ]);
  });
};
