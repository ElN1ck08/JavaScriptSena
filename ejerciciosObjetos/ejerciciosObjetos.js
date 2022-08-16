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


// LIBRO PAG 150 - 152 


// EJEMPLO 1
let dog = { dogName: "JavaScript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua"
          };

// EJEMPLO 2
class ClassName {
    constructor(prop1, prop2) {
      this.prop1 = prop1;
      this.prop2 = prop2;
  }
}
let obj = new ClassName("arg1", "arg2");

//EJEMPLO 3
function Dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
  let Dog = new Dog("Jacky", 30, "brown", "labrador");

  // EJEMPLO 4
  class Dog {
    constructor(dogName, weight, color, breed) {
      this.dogName = dogName;
      this.weight = weight;
      this.color = color;
      this.breed = breed;
  } }
  let Dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

  // EJEMPLO 5
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  }
  let p = new Person("Maaike", "van Putten");
  console.log("Hi", p.firstname, p.lastname);


  // EJEMPLO 6 
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    greet() {
      console.log("Hi there! I'm", this.firstname);
  } 

  // AGREGANDO UN COMPLEMENTO 
    compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
}
}
    let S = new Person("Maaike", "van Putten");
    S.greet();
    let compliment = S.compliment("Harry", "hat");
    console.log(compliment);

 
    // A menudo, no es deseable proporcionar acceso directo a nuestras propiedades. Queremos que nuestra clase tenga el control de los valores de las propiedades por varias razones; tal vez queramos hacer una validación en una propiedad para asegurarnos de que tiene un cierto valor. Por ejemplo, imagina querer validar que una edad no es inferior a 18 años. Podemos lograr esto haciendo imposible el acceso directo a la propiedad desde fuera de la clase. Así es como se añaden propiedades a las que no se puede acceder desde el exterior. Les anteponemos un símbolo #:


    // EJEMPLO 7
    // Si quisiéramos asegurarnos de que solo podíamos crear objetos con nombres que comenzaran con una "M", podríamos modificar un poco nuestro constructor:

    class Person {
        #firstname;
        #lastname;
        constructor(firstname, lastname) {
            if(firstname.startsWith("M")){
              this.#firstname = firstname;
            } else {
              this.#firstname = "M" + firstname;
            }
            this.#lastname = lastname;
          }
    }
    let b = new Person("kay", "Moon");

    // Un prototipo es el mecanismo de JavaScript que permite tener objetos. Cuando no se especifica nada al crear una clase, los objetos heredan del prototipo Object.prototype. Esta es una clase de JavaScript integrada bastante compleja que podemos utilizar. No necesitamos ver cómo se implementa esto en JavaScript, ya que Podemos considerarlo el objeto base que siempre está encima del árbol de herencia y, por lo tanto, siempre está presente en nuestros objetos. Hay una propiedad prototipo disponible en todas las clases, y siempre se llama "prototipo". Podemos acceder a él de esta manera:
    // EJEMPLO 8 

    class Person {
        constructor(firstname, lastname) {
          this.firstname = firstname;
          this.lastname = lastname;
        }
      greet() {
          console.log("Hi there!");
        }
      }
      Person.prototype.introduce = function () {
        console.log("Hi, I'm", this.firstname);
      };
      
      Person.prototype.favoriteColor = "green"

      let c = new Person("Maria", "Saga");
      console.log(p.favoriteColor);
      p.introduce();