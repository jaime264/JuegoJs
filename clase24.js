class Persona {
    constructor(nombre, apellido, edad, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.7
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido,edad,altura, trabajo){
        super(nombre, apellido, edad, altura)
        this.trabajo = trabajo
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}


var jaime = new Persona('jaime','rios', 28, 1.78)
var erika = new Desarrollador('erika', 'luna', 33, 1.60, 'vass')
