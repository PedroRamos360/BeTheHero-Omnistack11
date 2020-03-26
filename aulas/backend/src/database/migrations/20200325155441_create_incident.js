exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments(); // index => aumenta cada vez que for criado um novo incidente

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        // Associa o 'ong_id' a coluna id na tabela ongs
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
