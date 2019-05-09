
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName:'JimBob', Password:'qwerty'},
        {userName:'BobJim', Password:'Password1!'},
       
      ]);
    });
};
