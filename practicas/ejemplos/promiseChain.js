// Puedo crear una funcion que retorna una promesa
const deposito = pedir => {
    return new Promise((resolve, reject) => {
        if(pedir) {
            resolve(`- Se envio el pedido`)
        } else {
            reject(`- No se envio el pedido`)
        }
    })
}

// Otra forma de retornar una promesa por medio de una funcion
const confirmacion = check => new Promise((resolve, reject) => {
    if(check) {
        resolve(`- Llego la confirmacion`)
    } else {
        reject(`- No llego confirmacion`)
    }
})

// Consumo promesas con then y catch
// deposito(true)
//     .then((value) => {
//         console.log(value)
//         return confirmacion(true)
//     })
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((value) => {
//         console.log(value)
//     })

// Promise.all() toma como argumento un array de promesas y retorna UNA SOLA PROMESA
// si hay una promesa que no se cumple, Promise.all se rechaza con la razon especificada
// si todas las promesas se cumplen, Promise.all se resuelve con
// un array que contiene los valores especificados en resolve de cada promesa
// Promise.all() se usa cuando el orden de las promesas no importa
// const hagoPedido = async (valueBool1,valueBool2) => {
//     try {
//         const promesas = await Promise.all([
//             deposito(valueBool1),
//             confirmacion(valueBool2),
//         ]);
//         console.log(promesas);
//     } catch (err) {
//         console.log(err);
//     }
// }

// Consumo promesas con async y await
const hagoPedido = async (valueBool1,valueBool2) => {
    try {
        console.log(await deposito(valueBool1));
        console.log(await confirmacion(valueBool2));
    } catch (err) {
        console.log(err);
    }
}

hagoPedido(true,false);
