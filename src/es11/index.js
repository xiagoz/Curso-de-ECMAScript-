//ECMAScript 2020
// Dinamic Import
//Esto se trabaja con una página, asi que es necesario un HTML
// y esta debe tener un script de tipo módulo

const button = document.getElementById("btn1");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

// Big Int: Permite trabajar con números mayores a 2^53
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise all Settled: Nos devuelve una promesa que se resuelve despues
// de que todas las promesas dadas se hayan cumplido o rechazado en una
// serie de objectos que presenta el resultado de cada promesa.

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response))

//Diferencias entre Promise.all y Promise.allSettled
//Promise.all = va ser rechazada si alguna de las promesas cambia. Allí es donde acaba.
//Promise.allSettled = No importa el estado de las promesas, solo espera a que todas sean resueltas.

// Global This
console.log(globalThis);

//Operador de nulo = nos devuelve su operando del lado derecho. Cuando
// el operador del lado izquierod es nulo o undefined
const foo = null ?? 'default string';
const foo2 = 'Soy real?' ?? 'default string';
console.log(foo);
console.log(foo2);

// Optional Chaining = Permite no romper  la ejecución del código al 
// encontrar valores undefined dentro de los objetos

const user = {};
//console.log(user.profile.email);
console.log(user?.profile?.email);