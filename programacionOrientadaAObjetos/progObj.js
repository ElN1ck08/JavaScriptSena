class Producto{
    constructor(nombre, precio){
        this._nombre=nombre;
        this._precio=precio;
    }    
    get nombre(){
        return this._nombre;
    }    

    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }
}


//INSTANCIACION DE OBJETOS - operador new
//let x=10; similar a declarar variables
let prod1=new Producto('computador',4000000);
console.log(prod1.nombre, prod1.precio);
prod1.nombre="computador portatil";
console.log(prod1.nombre);

let prod2=new Producto (`Celular`,1200000);
console.log(prod2.nombre, prod2.precio)



// let prod2=new Producto('Celular',3000000);
// console.log(prod1);
// console.log(typeof(prod1));
// console.log(prod2);
// console.log(typeof(prod2));


//this significa éste(a) o el(la) presente = (objeto, clase o función)
const aprendiz1 = {
    nombre: "Maria",
    documento: 12345,
    competencias: ["diseño", "análisis", "desarrollo"],
    formacion:{ programa: "Prg de software", ficha:2453232, },
    datosPersonales:function(){
      return `nombre...${this.nombre}, documento...${this.documento}`;
    }
  }
  
  const aprendiz2 = {
    nombre: "Pedro",
    documento: 54321,
    competencias: ["diseño", "análisis", "desarrollo","ética"],
    formacion:{ programa: "Prg de software", ficha:2453232, },
    datosPersonales:function(){
      return `nombre...${this.nombre}, documento...${this.documento}`;
    }
  }
  console.log(aprendiz2.datosPersonales());
  
  //Datos primitivos o simples
  // let a;
  // a=1;
  // a='sena'
  // a=4.2;