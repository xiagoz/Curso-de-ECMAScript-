//object.entries
// Nos permite devolver el valor y la clave de una matriz
const data = {
    frontend: 'Christian',
    backend: 'Jessica',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

//Tambien disponemos del valor .length para saber cuantos valores tenemos en un arreglo
console.log(entries.length);

//objects.values
// Me devuelve los valores de un objeto a arreglo
const data = {
    frontend: 'Christian',
    backend: 'Jessica',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding
// padStart: sirve para añadir más caracteres a una cadena de texto, desde el inicio.
const string = 'hello';
//la palabra hello ya tiene 5 caracteres, le quiero agregar dos más. En total serían 7.
console.log(string.padStart(7,'hi'));

// padEnd: sirve para añadir más caracteres a una cadena de texto, al final.
console.log(string.padEnd(7,'hi'));

//Trailing-Comas
//Simplemente es dejar una coma al final del último elemento de un objeto.
// Para en un futuro seguir añadiendo
const obj = {
    firstName: 'Christian',
}

//Async Await
// Esta opción funciona casi siempre es aplicada a través de una promesa.
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};
// Luego creo otra función donde aplica el async await
// desde allí mando a llamar la promesa y hago lo que quiera hacer.
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

// luego llamo la función normalmente.
helloAsync();

//Para manejar correctamente el async await es necesario el uso del try catch
// Try - Catch
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

//Reformulando el async await
const howIsThatPokemon = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('It is Pikachu'), 3000)
        : reject(new error ('error'));
    })
}

const pokemonFunction = async () => {
    try {
        const pokemonName = await howIsThatPokemon();
        console.log (pokemonName);
    } catch (error) {
        console.error(error);
    }
}

pokemonFunction();