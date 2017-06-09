
exports.up = function(knex, Promise) {
  return knex.schema
.createTable('breweries', function(table) {
  table.increments('id').primary();
  table.string('name').notNull();
  table.string('city').notNull();
  table.string('state').notNull();
})
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('breweries');
};
