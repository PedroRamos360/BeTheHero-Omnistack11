// O que vai acontecer quando a migration for executada
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

// Para desfazer o que foi feito se acontecer algum problema
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
