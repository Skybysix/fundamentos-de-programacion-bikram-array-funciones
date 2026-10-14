//1
let arrayVacio = [];

//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3
let arrayNumerosPares = [0, 2, 4, 6, 8];

//4
let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

//5
function suma(a, b) {
  return a + b;
}

//6
function potenciacion(a, b) {
  return a ** b;
}

//7
function separarPalabras(texto) {
  return texto.split(" ");
}

//8
function repetirString(palabra, numeroRepeticiones) {
  let nuevaPalabra = "";
  for (let i = 1; i <= numeroRepeticiones; i++) {
    nuevaPalabra += palabra;
  }
  return nuevaPalabra;
}

//9
function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// 10
function ordenarArray(array) {
  return array.sort((a, b) => a - b);
}

const arrayDesordenado = [5, 2, 9, 1, 5, 6];
console.log("Array ordenado: " + ordenarArray(arrayDesordenado));

// 11
function obtenerPares(array) {
  const nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    const numeroActual = array[i];
    if (numeroActual % 2 === 0) {
      nuevoArray.push(numeroActual);
    }
  }
  return nuevoArray;
}

const arrayNumeros2 = [1, 2, 3, 4, 5, 6];
console.log("Elementos pares: " + obtenerPares(arrayNumeros2));

// 12
function pintarArray(array) {
  let resultado = "[";
  for (let i = 0; i < array.length; i++) {
    resultado = resultado + array[i];
    if (i < array.length - 1) {
      resultado += ", ";
    }
  }
  resultado = resultado + "]";
  return resultado;
}

const arrayEjemplo = [0, 1, 2];
console.log("Array pintado: " + pintarArray(arrayEjemplo));

// 13
function arrayMapi(array, callback) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(callback(array[i]));
  }
  return resultado;
}

const arrayEjemplo2 = [1, 2, 3, 4];

function duplicar(num) {
  return num * 2;
}

console.log("Array mapeado: " + arrayMapi(arrayEjemplo2, duplicar));

// 14
function eliminarDuplicados(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    console.log(
      `i: ${i}, array[i]: ${array[i]}, resultado: [${resultado}], noEstaIncluido: ${resultado.includes(array[i]) === false} `,
    );
    if (resultado.includes(array[i]) === false) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

const arrayConDuplicados = [1, 2, 3, 2, 4, 1, 5];
console.log("Array sin duplicados: " + eliminarDuplicados(arrayConDuplicados));

//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16
let holaMundo = ['Hola', 'Mundo'];

//17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

//18
let arrayDeArrays = array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//19
function multiplicacion(a, b) {
    return a * b;
}
console.log(multiplicacion(3, 4));



function multiplicacion(a, b) {
    return a * b;
}
const resultado = multiplicacion(5, 3);
console.log(resultado);

//20
function division(a, b) {
    return a / b;
}

console.log(division(3, 4));


function division(a, b) {
    return a / b;
}
const resultado = division(5, 3);
console.log(resultado);

//21

function esPar (a){
    return a % 2 === 0;
}
console.log (esPar (4));

function esPar (a){
    return a % 2 === 0;
}
const resultado = esPar (4);
console.log (resultado);

//22
let arrayFunciones = [S1 + S2, R1-R2, M1*M2] ?????

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

const arrayFunciones = [suma, resta, multiplicacion];
const resultadoSuma = suma (4,3);
const resultadoResta = resta (4,3);
const resultadoMultiplicacion = multiplicacion (4,3);

console.log (resultadoSuma, resultadoResta, resultadoMultiplicacion);
console.log(arrayFunciones[0](4, 3)); // 7
console.log(arrayFunciones[1](4, 3)); // 1
console.log(arrayFunciones[2](4, 3)); // 12

//23

function ordenarArray2(array) {
    return array.sort((a, b) => b - a);
}

console.log(ordenarArray2([3, 8, 1, 5, 2]));

//24
function obtenerImpares (array) {
  return array.filter (numero => numero % 2 !== 0);
}
console.log(obtenerImpares([1, 2, 3, 4, 5, 6, 7]));

//25
function sumarArray(a,b,c){
 return a + b + c;
}
console.log (sumarArray (1,2,3));


function sumarArray(array) {
    return array.reduce((suma, numero) => suma + numero, 0);
}

console.log(sumarArray([1, 2, 3]));

//26
function multiplicarArray (array) {
    return array.reduce((multiplicacion, numero) => multiplicacion * numero, 1);
}
console.log(multiplicarArray ([2,12]));