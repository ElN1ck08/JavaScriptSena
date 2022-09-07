//SINTAXYS PARA JSON
// Las propiedades tienen doble comilla
// Los datos se guardan como nombre-valor 
// {Para objetos}||[Para arrays]
// FORMATO ESTANDAR PARA GUARDAR Y TRANSFERIR DATOS  
// En los formatos web JSON se recibe como una cadena 

const ejercicio = `
[
    {
        "nombre": "Nicolas",
        "apellido": "Escolar",
        "edad": 18,
        "apodo": "Chata"
    },

    {
        "nombre": "Julian",
        "apellido": "Betancourt",
        "edad": 19,
        "apodo": false 
    },

    {
        "nombre": "Juan",
        "apellido": "Ruidiaz",
        "edad": 17, 
        "apodo": "Juanito"
    }

]
`
console.log(typeof ejercicio)

// Para covertir la cadena en un objeto Js se usa el metodo parse EJEMPLO:

const jsonTransform = JSON.parse(ejercicio)
console.log(typeof jsonTransform)


// Para hacer un filtro se usa el metodo filter EJEMPLO: 

const filtro = jsonTransform.filter(
    (persona) => persona.edad > 17
) 
console.log(filtro)

//Para convertir la cadena de nuevo a formato json se usa el metodo stringify EJEMPLO: 

const nuevojson = JSON.stringify(filtro)
console.log(typeof nuevojson)

//Para modificar un archivo json desde js se utiliza el metodo de node fs EJEMPLO 

const filesistem = requiere (`fs`)
// Creamos el objeto nuevo 
const personaNueva = {
    nombre: "Miguel",
    apellido: "Lozano",
    edad: 18,
    apodo: false 
}

//Lo convertimos en formato json
const newPerson = JSON.stringify(personaNueva)

//Usamos el metodo de fs writeFile (fs es Filse sistem) 
fs.writeFile(`ejercicio.json`, personaNueva, (error)=>{
    if (error) throw error
    console.log(`Informacion recibida`)
})

//Para comprobar que fucniono correctamente abrimos el terminal y escribimos node y el nombre del archivo en este caso es ejercicio.js

//Para recorrer los objetos en json se utiliza el for de la siguiente manera 

for (M in ejercicio){
    console.log(ejercicio[M])
}