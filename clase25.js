class Persona {
    constructor(nombre, apellido, edad, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(fn){
        var {nombre,apellido} = this
        console.log(`hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre,apellido,)
        }
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

    saludar(fn){
        var {nombre,apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre,apellido,esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`a mira no sabias que eres desarrollador/a`)
    }
}

var jaime = new Persona('jaime','rios', 28, 1.78)
var juan = new Persona('juan','calvo', 29, 1.70)
var erika = new Desarrollador('erika', 'luna', 33, 1.60, 'vass')

jaime.saludar()
juan.saludar(responderSaludo)
erika.saludar(responderSaludo)