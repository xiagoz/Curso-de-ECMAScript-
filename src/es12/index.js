//Replace All = Encuentra y reemplaza todo lo que esté en la cadena, el cual haga match
//replace = permite encontrar el primer valor de este string y reemplazarlo por otro

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web!";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// Métodos privados

class Message {
    #show(val) {
        console.log(val);
    };
}

const message = new Message();
message.show('hola mundo');

// Promise Any = Es un objeto global de Promise.
// array de promesas que nosotros generamos
// y este captura la primera promesa que sea resuelta de forma satisfactoria

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// WeakRef = Es un objeto que le permite tener la referencia
// debíl a otro objeto sin evitar que este objeto sea
// recogido por el garbage collector de js

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element) // esto lo hacemos para evitar que el garbage collector elimine nuestra referencia
    }
    {...}
}

// Nuevos Operadores Logicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); // false

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);// true

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);// false