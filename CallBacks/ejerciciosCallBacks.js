//EJEMPLOS CALLBACKS HECHOS EN CLASE 

function pruebaCallback(callback1,callback2,name){ 
    setTimeout(() => {
        callback1(name);   
    }, 5000);
        
    setTimeout(() => {             
        console.log('Dentro de pruebaCallback')                
    }, 1000);  
    
    setTimeout(() => {
        callback2(name);
    }, 3000);
   
}
function saludo(nombre){
    console.log(`Hola ${nombre}`)
}

function cuentaLetras(nombre){
    console.log(nombre.length);
}
pruebaCallback(cuentaLetras,saludo,'Ana');
//pruebaCallback(cuentaLetras,'Soacha Cundinamarca');

////////////////////////////////////////////////////////////
let vector=[]
function principal(callback1,vec,tam){
for (let i = 0; i < tam; i++) {    
    vec[i]=Math.round(Math.random()*100);
}
setTimeout(() => {
    console.log(callback1(vec));
}, 2000);

setTimeout(() => {
callback2(vec);
 }, 5000);
}

const promedio=(vec)=>{
    let suma=0;
    for (let i = 0; i < vec.length; i++) {      
        suma+=vec[i];
    }
    return suma;
}

principal(promedio,vector,15);
console.log(vector);

///////////////////////////////////////////////////////

console.log('Hola');
setTimeout(() => {
    console.log('interrupción por timeout');
}, 2000);
setTimeout(function(){
    console.log('settimeout con función clásica')
},1000)
function externa(){
    console.log('soy externa al settimeout')
}
setTimeout(externa,500);

console.log('Mundo');
function saludos(){
    console.log("Hola Mundo");
  } 
  setTimeout(saludos);
  console.log('Debo ejecutarme antes del time out')
  function saludos(nombre, rol){
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);
  }  
saludos('juan','médico');
setTimeout(saludos, 3000, "Nathan", "Programador");

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(Math.random())        
    }, 2000);
    
}

console.log((Math.random()*100+20)-20);

function vector(vec,tam){
for (let i = 0; i < tam; i++) {
 vec[i]=Math.random()*100;
}
console.log(',,,,',vec);
}
vec=[];
setTimeout(vector,1000,vec,5);
console.log(vec);

console.log(Math.random());
console.log(Math.random()*(100-20)+20);


//////////////////////////////////////////////

var vec=[];
for (let i = 0; i < 10; i++) {
    vec[i]=Math.round(Math.random()*100);    
}

var mifuncion=() => {        
    console.log(vec[k])
    k++;
    k==10?k=0:k=k
}
var k=0;
    setInterval(mifuncion, (1000));        

for (let j = 0; j < vec.length; j++) {
    setTimeout(() => {
        console.log(vec[j])
    }, (1000*j));        
}


//Misión: Porque cambia con let y var. 
for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, (1000*j));        
}
setInterval(() => {
    console.log('Amo el SENA');
}, 1000);

// repetir con el intervalo de 2 segundos
let timerId = setInterval(() => console.log('tick'), 2000);

// después de 5 segundos parar
setTimeout(() => { 
    clearInterval(timerId);
   // console.log('stop');
    }, 5000);

//OPERADOR CONDICIONAL TERNARIO
let x=10
x>=50?console.log('es mayor'):console.log('es menor')
if (x>=50) {
    console.log('es mayor')
} else {
    console.log('es menor')
}
//////////////////////////////////////////////////

// EJERCICIO PARA LA CASA :D PAGINAS DEL LIBRO 

    /////////////////////////////////////

    function saySomething(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("something" + x);
    }, 2000); });
    }
    async function talk(x) {
        const words = await saySomething(x);
        console.log(words);
    }
    talk(2);
    talk(4);
    talk(8);