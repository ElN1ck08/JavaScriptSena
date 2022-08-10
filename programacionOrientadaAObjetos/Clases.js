class Persona {
    constructor (nombre, documento){
        this._nombre=nombre
        this._documento=documento
    }
    set nombre (nombre) {
    this._nombre = nombre
    }
    set documento (documento) {
    this._documento(documento)
    }

    get nombre () {
        return this.nombre
    }

    get documento () {
        return this.documento
    }
}

const ob = new Persona()
console.log(typeof(ob))

class Aprendiz extends Persona{
    constructor (nombre, documento, ficha, programa) {
        super( nombre, documento)
        this.ficha= ficha
        this.programa = programa
    }

    get ficha () {
        return this._ficha 
    }

    set ficha (ficha) {
        this._ficha = ficha 
    }

    get programa () {
        return this._programa 
    }

    set programa (programa) {
        this._programa = programa
    }

    datosCompletos () {
        return `${this._ficha}, ${this._programa}`
                `${this._nombre}, ${this._documento}`
    }
}

const ap1 = new Aprendiz ("Juan Florez", 52486, 2453232, "ADSI")

console.log(ap1.nombre)
console.log(ap1.datosCompletos)

