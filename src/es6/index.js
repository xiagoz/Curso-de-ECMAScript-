function newFunction(name, age, country) {
    var name = name || 'Christian';
    var age = age || 27;
    var country = country || 'Panamá';
    console.log(name, age, country);
};

//es6 - Default Params
function newFunction2(name='christian', age=27, country='PA') {
    console.log(name, age, country);
};

newFunction2(); 
newFunction2('Ricardo', '23', 'CO');

// Template Literals
let hello = "hello";
let world = "World";
let epicPhrase = hello + ' '+ world;
console.log(epicPhrase);
let epicPhrase2 =`${hello} ${world}`;
console.log(epicPhrase2);

//Multilínea
let lorem = "a super epic phrase... \n"
+ "Another epic phrase.";
//Multilínea pero en ES6
let lorem2 = `Otra frase epica que necesitamos
Ahora es otra frase epica...
`;

console.log(lorem);
console.log(lorem2);

//Desestructuración  de los elementos
let person = {
    'name': 'Chris',
    'age': 27,
    'country': 'PA'
}
//Antes
console.log(person.name, person.age, person.country);
//Con ES6
let { name, age, country } = person;
console.log(name, age, country);

//Operador de propagación
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Christian', 'Yesica', 'Camila'];

let teamEdu = ['David', ...team1, ...team2];

console.log(teamEdu);

// Variables
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global let';
    console.log(`Impresión dentro de su scope ${globalLet}`);
}

console.log(globalVar);
console.log(globalLet);

// Constantes
const a = 'b';
a = 'a';

// Objects Params - Esto se hacía para crear nuevos  objetos con estos elementos
//ES5
let name = 'Christian';
let age = 27;

obj = { name: name, age: age};

//ES6
obj2 = { name, age};
console.log(obj2);
console.log(obj);

const names = [
    {name: 'Christian', age: 27},
    {name: 'Jessica', age: 25}
]

// ARROW FUNCTIONS
//ES5 - Esto era pasar una función anonima
let listOfNames = names.map(function (item){
    console.log(item.name);
})

//ES6 - Simplemente quitamos la palabra function, 
// mantenemos el parametro
// colocamos la flecha, seguido de lo que queremos hacer.
let listOfNames2 = names.map(item => console.log(item.name));

// Otra forma de verlo, es cuando pasamos directo los parametros
const listOfNames3 = (name, age) => {
    console.log(name)
    console.log(age)
}

// Otra forma: Si solo vamos a necesitar un parametro
// Siempre el parametró va antes de la flecha
const listOfNames4 = name => {
    console.log(name)
}

//Otra: no hay que establecer un return, ni un bloque de llaves.
const square = num => num + num;

//PROMESAS
// Asignamos una función que es una arrow con la promesa de que algo sucederá
// Entonces, se debe especificar cuando el valore de retorno sea verdadero o falso
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Cool right!!");
        } else {
            reject("Ups!!");
        }
    });
}

// Entonces cuando queremos ejecutar la promesa, debemos setear dos variables más
//Then: que se va ser si la respuesta es correcta
// catch: que se va ser si recibimos un error
// Tambien se pueden anidar varios Then a la respuesta.
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//Clases
//para inicializar la clase es necesario el método constructor
class calculator {
    constructor() {
        //Aquí vamos a asignar las variables que van a estar disponibles en un score global.
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2,2));

// Import and Export
// Estos se usa para trabajar con módulos

import myHello from './module';
myHello();

console.log(myHello());
// De esta forma podemos separar las funciones en diferentes modulos
// Y llamarlas según sea el caso a nuestro documento principal
// Ejemplos de uso: Una llamada a un api.

//Generator Generadores
// Es una función especial, que retorna una serie de valores según el algoritmo definido
// El asteristicos es para indicar que es un generator
function* helloWorld() {
    if (true) {
        // Guarda el valor de forma interna y permite retornar algo.
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
// Next permite ejecutar una primera ubicacion logica de la función
// Pero recueda en donde o que parte del código quedó
// de manera que si se ejecuta por segunda vez, no pasará por la asignación logica que ya hizo
// sino que pasará a la siguiente. Por eso que a pesar de que se cumple el true no se imprime
// en la misma linea.
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);