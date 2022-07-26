/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { username: 'akon', password: '123', email: 'a@gmail.com'},
    { username: 'bkon', password: '123', email: 'b@gmail.com'},
    { username: 'ckon', password: '123', email: 'c@gmail.com'}
  ]);
};
