const resolvedCheck = true;

const delay = (x,y) => new Promise((resolve, reject) => { 
    if (resolvedCheck) {
        setTimeout(() => resolve(x), y)
    } else {
        reject(`Hubo un error papa!`)
    }
});

// Consumo promesa usando then y catch
// delay(7,2000)
//     .then(x => {
//         console.log(x);
//     })
//     .catch(e => {
//         console.log(e);
// })

// Consumo promesa usando async y await, manejando los errores y mensajes con try y catch
const getValue = async (x,y) => {
    try {
        console.log(await delay(x,y));
    } catch (err) {
        console.log(err);
    }
  }

// Las agrego en una funcion async para hacer que el mas demorado igualmente siempre salga primero
async function ordenado() {
  await getValue(5,5000)
  await getValue(7,3000)
}
  
ordenado()

