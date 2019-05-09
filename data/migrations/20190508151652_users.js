
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl){
        tbl.increments();
        tbl.string('username', 40).notNullable().unique();
        tbl.string('password').notNullable();
        tbl.string('Department')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};