const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const obtenerListaPrecios = () => { return productos.map(prod => prod.precio) };
const obtenerNombreProductos = () => { return productos.map(prod => prod.nombre) };
const menorMayorPrecio = () => {
    return productos.sort((a, b) => {
        if (a.precio < b.precio) {
            return -1
        } else {
            return 1
        }
    });
}

// Punto A
const stringList = () => { 
    return (obtenerNombreProductos()).toString(); 
};

// Punto B
const sumarTotal = () => { 
    return (obtenerListaPrecios().reduce((a, b) => a + b, 0)).toFixed(2);
}

// Punto c
const precioPromedio = () => { 
    return (sumarTotal() / productos.length).toFixed(2) ;
}

// Producto mayor precio
const mayorPrecio = () => { 
    // una forma
    return productos.filter((product) => product.precio === Math.max(...obtenerListaPrecios()))[0];

    // segunda forma
    // return menorMayorPrecio()[productos.length - 1];
}

// Producto mayor precio
const menorPrecio = () => {
    // una forma
    return productos.filter((product) => product.precio === Math.min(...obtenerListaPrecios()))[0];

    // segunda forma
    // return menorMayorPrecio()[0]
}


console.log({
    Productos: stringList(),
    SumaTotal: sumarTotal(),
    PrecioPromedio: precioPromedio(),
    MayorPrecio: mayorPrecio(),
    MenorPrecio: menorPrecio()
})

 