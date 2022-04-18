const { Carritos } = require('../source/dataObjects.js');

class Cart {
    constructor (id, timestamp) {
        this.id = id ;
        this.timestamp = timestamp ;
        // this.productos = productos ;
    }
    createCart () {
        Carritos.push(
          {
            'id': this.id,
            'timestamp': `${this.timestamp}`,
            'productos': []
          }
        );
    }
}

module.exports = { Cart };