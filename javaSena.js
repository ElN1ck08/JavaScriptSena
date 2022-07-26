//EJERCICIOS CONDICIONALES 


// Ejercicio 1: Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el valor del medio es 11. No use operadores lógicos

var x = Math.floor(Math.random() * 100)
var y = Math.floor(Math.random() * 100)
var z = Math.floor(Math.random() * 100)

console.log(`${x}, ${y}, ${z}`)

if (x < y) {
    (x > z)
    console.log(`El numero del medio es: ${x}`)
} else if (y > z) {
    console.log(`El numero del medio es: ${y}`)

} else console.log(`El numero del medio es: ${z}`)


// Ejercicio 2: Escribe un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos

var a = Math.floor(Math.random() * 100)
var b = Math.floor(Math.random() * 100)
var c = Math.floor(Math.random() * 100)

console.log(`${a}, ${b}, ${c}`)

if (a == b && a == c) {
    console.log(`Los 3 numeros son iguales`)
} else if (a == b || a == c || b == c) {
    console.log(`Hay dos numeros iguales`)

} else console.log(`los 3 numeros son distintos`)


// Ejercicio 3: Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número exceda los límites emita un mensaje y finalice el programa


let numero = parseInt(prompt(`Digite un numero no superior a 9999`))
let contador = 0;
if (numero > 9999) {
    alert(`El numero ${numero} es superior a 9999`)
} else while (numero >= 1 && numero <= 9999) {
    contador = contador + 1
    numero = (numero / 10)
}
document.write(`El numero tiene ${contador} digitos <br>`)

// Ejercicio 4: Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores

var notas;
console.log("1-Su nota esta entre 8.6 y 10");
console.log("2-Su nota esta entre 8.1 y 8.5");
console.log("3-Su nota esta entre 7.5 y 8.4");
console.log("4-Su nota esta entre 6.5 y 7.4");
console.log("5-Su nota esta entre 1 y 6.4");
console.log("6-Salir")
notas = 5;

switch (notas) {
    case 1:
        console.log(`Su nota es superior`);
        break;
    case 2:
        console.log(`Su nota es alta`);
        break;
    case 3:
        console.log(`Su nota es promedio`);
        break;
    case 4:
        console.log("Su nota es baja");
        break;
    case 5:
        console.log("Reprobo la asignatura");
        break;
    case 6:
        console.log("Suerte es que le digo");
        break;

    default:
        console.log("ERROR");
        break;
}





