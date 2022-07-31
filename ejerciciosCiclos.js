//1. Determinar los divisores de un número introducido por teclado

var nume = Math.floor(Math.random()*100)
    if (isNaN(nume) || nume == 0)
    console.log(`ERROR`)

    for (let a = 1; a<=100; a++){
        if (nume % a == 0) {
            console.log(`${nume} es multiplo de ${a}`)
        }
    }


//2. Determinar si un numero es o no es primo 


var num = parseInt(prompt(`Escriba el numero que quiere saber si es o no primo`))
var b=2 
var contador=0 

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



//3. Determinar si un número es o no es perfecto. Un numero es perfecto si la suma de sus divisores sin incluir el propio número es igual a este 

var c = 28
var acomulador = 0

for (let conta = 1; conta<=c/2; conta++) {
    if (c % conta == 0) {
        acomulador += conta
        if (acomulador != 0 && acomulador == c) {
            console.log(`El numero ${c} es perfecto`)
        } else console.log(`El numero ${c} no es perfecto`)
    } 
}

// 4. Determinar cuales y cuantos números perfectos hay entre 1 y 1000?


