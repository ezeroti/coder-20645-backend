const Productos = [
    {
      "id": 1,
      "timestamp": "10.04.2022@10.10.10",
      "nombre": "Capacitor Electrolitico",
      "descripcion": "Capacitor Electrolitico - 1000mF x 25V",
      "codigo": "AAAA",
      "foto": "https://leantec.es/wp-content/uploads/2018/02/p_1_6_7_7_1677-Condensador-electrolitico-1000uF-25V.jpg",
      "price": 125.5,
      "stock": 144
    },
    {
      "id": 2,
      "timestamp": "10.04.2022@10.11.10",
      "nombre": "Regulador de tension LM7818",
      "descripcion": "Regulador de tension LM7818 - 18V x 1.5A",
      "codigo": "BBBB",
      "foto": "https://leantec.es/wp-content/uploads/2018/02/p_1_4_6_7_1467-Regulador-tension-L7818CV-LM7818-7818-18V-1.5A-TO-220.jpg",
      "price": 322.99,
      "stock": 1011
    },
    {
      "id": 3,
      "timestamp": "10.04.2022@10.12.10",
      "nombre": "Timer",
      "descripcion": "Timer NE555 DIP-8",
      "codigo": "CCCC",
      "foto": "https://leantec.es/wp-content/uploads/2018/02/p_1_4_9_3_1493-Timer-precision-Oscilador-555-NE555-NE555P-DIP-8.jpg",
      "price": 518.5,
      "stock": 99
    }
];

const Carritos = [];

module.exports = { Productos, Carritos };