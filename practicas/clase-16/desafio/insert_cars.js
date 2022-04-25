const { mysqlops } = require('./options/mysql.js');
const { sqliteops } = require('./options/sqlite.js');

// const knex = require('knex')(mysqlops);
const knex = require('knex')(sqliteops);

const cars = [
    { name: 'Ferrari', price: 20000000 },
    { name: 'Lamborghini', price: 30000000 },
    { name: 'Bugatti', price: 40000000 },
    { name: 'Porsche', price: 50000000 },
    { name: 'Mercedes', price: 60000000 },
    { name: 'Audi', price: 70000000 },
    { name: 'BMW', price: 80000000 },
    { name: 'Volkswagen', price: 90000000 },
];


const instertTables = () => {
    knex('cars').insert(cars)
        .then(() => {
            console.log('Cars inserted')
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            knex.destroy();
        })
}

instertTables();