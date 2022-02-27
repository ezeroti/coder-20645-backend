const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const obtenerListaPrecios = () => { return productos.map(prod => prod.precio) }
const obtenerNombreProductos = () => { return productos.map(prod => prod.nombre) }

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
    return Math.max(...obtenerListaPrecios());
}

// Producto mayor precio
const menorPrecio = () => { 
    return Math.min(...obtenerListaPrecios());
}

console.log({
    Productos: stringList(),
    SumaTotal: sumarTotal(),
    PrecioPromedio: precioPromedio(),
    MayorPrecio: mayorPrecio(),
    MenorPrecio: menorPrecio()
})

 