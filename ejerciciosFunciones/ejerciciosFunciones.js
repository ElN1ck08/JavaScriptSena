// FUNCIONES EN CONDICIONALES 


// EJERCICIO 1: Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el valor del medio es 11. No use operadores lógicos CONVERTIDO A FUNCION CLASICA
var numeros = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]

console.log (numeros)

numeros.forEach(function medio(){
    
    if (numeros[0] < numeros [1]) {
        (numeros[0] > numeros [2])
        console.log(`El numero del medio es: ${numeros[0]}`)
    } else if (numeros[1] > numeros[2]) {
        console.log(`El numero del medio es: ${numeros[1]}`)
    
    } else console.log(`El numero del medio es: ${numeros [2]}`)
})

console.log(medio())

// EJERCICIO 2: Escribe un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos CONVERTIDO A FUNCION FLECHA

var numeros2 = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]

console.log(numeros2)

numeros2.forEach((igu) => {
    if (numeros2[0] == numeros2 [1] && numeros2 [0] == numeros2 [2]) {
        console.log(`Los 3 numeros son iguales`)
    } else if (numeros2[0]  == numeros2[1] || numeros2[0] == numeros2[2] || numeros2[1] == numeros2[2]) {
        console.log(`Hay dos numeros iguales`)
    
    } else console.log(`los 3 numeros son distintos`)
})

console.log(igu())

// EJERCICIO 3: Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número exceda los límites emita un mensaje y finalice el programa CONVERTIDO A FUNCION CLASICA 

var numero3 = Math.floor(Math.random()*10000)
var contador1 = 0

console.log(numero3)

function cifras() {
    if (numero3 > 9999) {
        console.log (`El numero ${numero3} es superior a 9999`)
    } else while (numero3 >= 1 && numero3 <= 9999) {
        contador1 = contador1 + 1
        numero3 = (numero3 / 10)
    }
    return `El numero tiene ${contador1} digitos`

}
console.log (cifras())


// EJERCICIO 4: Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig. manera:
// Si trabaja 40 horas o menos se le paga $2600 por hora
// Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra FUNCION FLECHA 

var numeros4 = 10
var contador2 = 0
var contador3 = 0
var horasEx = 0

let sal = () => {
    if (numeros4 <=40 ) {
        contador2 = numeros4 * 2600 
        return(`Su salario es de ${contador2}`)
    
    } else (horasEx = numeros4 - 40)
        contador3 = 40 * 2600 + horasEx * 5000
       
        return (`Su salario es de ${contador3}`)
}

console.log (sal())

