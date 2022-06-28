//Includes
//Es una función que verifica si hay algun valor en un array
// Anteriormente se utilizaba indexOf, junto a un código un poco más complejo.
let numbers = [1,2,3,7,8];

if (numbers.includes(97)) {
    console.log('Sí se encuentra el valor 7');
} else {
    console.log('No se encuentra')
}

//Como elevar mejor a la potencia
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);