// EJERCICIO 1: eterminar los divisores de un número introducido por teclado CONVERTIDO A FUNCION CLASIC

var nume = Math.floor(Math.random()*100)

function divi () {
if (isNaN(nume) || nume == 0)
    console.log(`ERROR`)

    for (let a = 1; a<=100; a++){
        if (nume % a == 0) {
            console.log(`${nume} es multiplo de ${a}`)
        }
    }
} 

// EJERCICIO 2: Determinar si un numero es o no es primo CONVERTIDO A FUNCION FLECHA 

var num = Math.floor(Math.random()*100)
var b=2 
var contador=0 

let prim = () => {
if (num==1) {
    contador=contador+1
}
while (num<=num+1) {
    if (num%b== 0) {
    contador=contador+1 
    console.log(`Los divisores son ${b}`)
    }
    b++;
}
if (contador>0) 
    console.log (`El numero no es primo`)
else 
    console.log(`El numero es primo`)
}

//EJERCICIO 3: Determinar si un número es o no es perfecto. Un numero es perfecto si la suma de sus divisores sin incluir el propio número es igual a este FUNCION CLASICA 

var c = 28
var acomulador = 0

function perfectos () {
for (let conta = 1; conta<=c/2; conta++) {
    if (c % conta == 0) {
        acomulador += conta
        if (acomulador != 0 && acomulador == c) {
            console.log(`El numero ${c} es perfecto`)
        } else console.log(`El numero ${c} no es perfecto`)
    } 
}
}

//EJERCICIO 4: Determinar cuales y cuantos números perfectos hay entre 1 y 1000 A FUNCCION FLECHA 

var nm = 1000
var sd = 0 
var npf = 0

let nmperf = () => {
for (let d = 1; d<=nm; d+=1) {
    for (let e = 1; e<d; e+=1) {
        if (d % e == 0) {
            sd += e     
        }
        if (sd == d)
        console.log(`El numero ${d} es perfecto`)
        npf += 1 
    }
    sd = 0
}
console.log(`Hay ${npf} cantidad de numeros perfectos`)
}