// SUMA DE NUMEROS FRACCIONARIOS


var numeros = {
    numerador1: Math.round (Math.random()*10),
    denominador1: Math.round (Math.random()*10),
    numerador2: Math.round (Math.random()*10),
    denominador2: Math.round (Math.random()*10)
}
console.log(numeros)

var sumaNd = numeros.numerador1 * numeros.denominador2  
var sumaDd = numeros.denominador1 * numeros.denominador2
var sumaDn = numeros.denominador1 * numeros.numerador2
var sm = sumaNd + sumaDn


console.log (`La suma de los numeros es: ${sm}/${sumaDd}`)


// RESTA DE NUMEROS FRACCIONARIOS

var rs = sumaNd - sumaDn
console.log (`La resta de los numeros es: ${rs}/${sumaDd}`)

// MULTIPLICACION DE NUMEROS FRACCIONARIOS 

var mpNn = numeros.numerador1 * numeros.numerador2
var mpDd = numeros.denominador1 * numeros.denominador2

console.log (`El resultado de la multiplicacion de los numeros es: ${mpNn}/${mpDd}`)

// DIVISION DE NUMEROS FRACCIONARIOS 
var dvNd = numeros.numerador1 * numeros.denominador2
var dvDn = numeros.denominador2 * numeros.numerador2

console.log (`La division de los numeros es: ${dvNd}/${dvDn}`)