// Operador de reposo
// Permite extraer propiedades de un Objecto que aun no se ha construído.

const obj = {
    name: 'Christian',
    age: 27,
    country: 'PA',
}

let { name, ...all } = obj;
// let { country, ...all2 } = obj;

console.log(name);
console.log(all);

//Utilizando la propiedades de propagación
const obj1 = {
    name: "Christian",
    age: 27,
}

const obj2 = {
    ...obj1,
    country: 'PA',
}

console.log(obj2);

// Promise.finally
// podemos saber cuando ha tereminado el llamado y poder ejecutar una lógica según sea el caso.
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello Wold!!'), 5000)
        : reject(new Error('Esto es un error'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Ya finalizó'))

//REGEX
const regexData =/([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

// Otra práctica de Async Await
const whoIsTheBand = () => {
    return new Promise ((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve(`It's Dream Theater`), 5000)
        : reject (new Error(Error));
    })
};

const isItAProgressiveMetal = async () => {
    const band = await whoIsTheBand();
    console.log(band);
}

isItAProgressiveMetal()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Ya terminó el código'));
