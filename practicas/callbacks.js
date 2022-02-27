const operacion = (valor1, valor2, op) => op(valor1, valor2);

const suma = (valor1, valor2) => { return valor1 + valor2 };
const resta = (valor1, valor2) => { return valor1 - valor2 };
const multiplicacion = (valor1, valor2) => { return valor1 * valor2 };
const modulo = (valor1, valor2) => {
    if (valor2 == 0) {
        return `No se puede dividir por 0`;
    } else {
        return valor1 % valor2 ;
    }
};
const division = (valor1, valor2) => {
    if (valor2 == 0) {
        return `No se puede dividir por 0`;
    } else {
        return valor1 / valor2 ;
    }
};

const valor1 = 42;
const valor2 = 6;

console.log(`${valor1}-${valor2}: ${operacion(valor1,valor2,resta)}`);
console.log(`${valor1}+${valor2}: ${operacion(valor1,valor2,suma)}`);
console.log(`${valor1}*${valor2}: ${operacion(valor1,valor2,multiplicacion)}`);
console.log(`${valor1}/${valor2}: ${operacion(valor1,valor2,division)}`);
console.log(`${valor1}%${valor2}: ${operacion(valor1,valor2,modulo)}`);