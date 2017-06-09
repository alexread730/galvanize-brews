  exports.up = function(knex, Promise) {
    return knex.schema
  .createTable('beers', function(table) {
    table.increments('id').primary();
    table.string('name').notNull();
    table.float('abv').notNull();
    table.integer('brewery_id').unsigned();
    table.foreign('brewery_id').references('breweries.id');
  })
  };

  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('beers');
  };
