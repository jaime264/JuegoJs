var jaime = {
    nombre : 'Jaime',
    apellido : 'Rios',
    edad : 28
}

var jose = {
    nombre : 'Jose',
    apellido : 'Vargas',
    edad : 15
}

const MAYORIA_DE_EDAD = 18

//function esMayorDeEdad(persona){
//    return persona.edad >= 18
//}

const esMayorDeEdad = persona => persona.edad >= 18
const esMenorDeEdad = persona => persona.edad <=18

function imprimirMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

