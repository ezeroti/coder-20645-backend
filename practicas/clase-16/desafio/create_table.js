const { mysqlops } = require('./options/mysql.js');
const { sqliteops } = require('./options/sqlite.js');

// const knex = require('knex')(mysqlops);
const knex = require('knex')(sqliteops);

const createTables = async () => {
    try {
        await knex.schema.createTable('cars', table => {
            table.increments('id');
            table.string('name');
            table.integer('price');
        });
        console.log('Table cars created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
};

createTables();

// // create table cars
// knex.schema.createTable('cars', table => {
//     table.increments('id');
//     table.string('name');
//     table.integer('price');
// })
// .then(() => {
//     console.log('Table cars created');
// })
// .catch(err => {
//     console.log(err);
// })
// .finally(() => {
//     knex.destroy();
// });