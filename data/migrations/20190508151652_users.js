
exports.up = function(knex, Promise) {
  
};

exports.down = function(knex, Promise) {
  
};
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl){
        tbl.increments();
        tbl.string('userName', 40).notNullable().unique();
        tbl.string('Password').notNullable();
        tbl.string('Department')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};