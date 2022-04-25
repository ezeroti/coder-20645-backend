const { mysqlops } = require('../options/mysql.js');
const { sqliteops } = require('../options/sqlite.js');
const knex = require('knex');

class Contenedor {
    constructor(conf,table) {
        this.knex = knex(conf);
        this.table = table;
    }
    checkTable = async () => {
       await this.knex.schema.hasTable(this.table, exists => {
            return exists
      });
    }
    createTable = async () => {
        try {
            await this.knex.schema.createTable(this.table, table => {
                if(this.table === 'Productos') {
                    table.increments('id');
                    table.string('title');
                    table.string('price');
                    table.string('thumbnail');
                } else if(this.table === 'Mensajes'){
                    table.increments('id');
                    table.string('email');
                    table.string('text');
                    table.string('date');            
                } else {
                    console.log('Tablas incorrectas');
                }
            });
        } catch (err) {
            console.log(err);
        }
    };
    insertTables = (obj) => {
        this.knex(this.table).insert(obj)
            .then(() => {
                console.log('Prods inserted')
            })
            .catch(err => {
                console.log(err);
            })
    };
};

module.exports = { Contenedor, sqliteops, mysqlops }
