// FUNCIONES EN CONDICIONALES 


// EJERCICIO 1 CONVERTIDO A FUNCION
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
