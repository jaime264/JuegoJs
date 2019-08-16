var Jaime = {
    nombre: 'Jaime',
    apellido: 'Rios',
    edad : 28,
    ingeniero : true,
    cocinero : false,
    cantante : false,
    dj : false,
    guitarrista : false,
    drone: true 
}

function imprimirProfesiones(persona){
    console.log(`${Jaime.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('')
    }
}

function imprimirMayorDeEdad(persona){
    if(persona.edad > 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirMayorDeEdad(Jaime)
