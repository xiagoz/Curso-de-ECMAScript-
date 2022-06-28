//ES10 - Julio 2019
let array = [1,2,3, [5,6,7, [8,9,10]]];
//Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
console.log(array.flat(2));

// flatMap
//Nos permite multiplicar un valor por un número que seleccionemos. En este ejemplo el 2.

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

//TrimStart
// Permite eliminar los espacios en blanco de un string

let hello = '      hello world!';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world!       ';
console.log(hello2);
console.log(hello2.trimEnd());

//Optional catch Binding
// Podemos pasar el parametro de error al valor de catch

// Antes
try {
    ...
} catch (error) {
    error
}
//Después de ES10

try {
    ...
    //Directamente ya va estar disponible dentro del código del catch
} catch {
    error
}

//From Entries
// Transforma Clave - Valor en un objeto
// Esto se usa cuando estas trabajando con arreglos y quieras transformarlos a objetos

let entries = [["name", "Christian"], ["age", 27]];
let x = Object.fromEntries(entries);
console.log('Primero de array a Object');
console.log(x);

console.log('Ahora sigue de object a array');
let y = Array.fromEntries(x);
console.log(y);

// Symbol
//Symbol es un tipo de datos cuyos valores
//son únicos e immutables. Dichos valores pueden
//ser utilizados como identificadores (claves) de las propiedades de los objetos.

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
//Sirve para obtener el valor del simbolo.
console.log(symbol.description);