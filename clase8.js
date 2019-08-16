var Jaime = {
    nombre : 'Jaime',
    apellido : 'Rios',
    edad : 28,
}

var Dario = {
    nombre : 'Dario',
    apellido : 'Susniky',
    edad : 26
}

function imprimirNombreEnMayusculas(persona){
    var {nombre} = persona;
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Jaime)
imprimirNombreEnMayusculas(Dario)

function imprimirNombreEdad(persona){
    var {nombre} = persona;
    var {apellido} = persona;
    var {edad} = persona;
    console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)

}

imprimirNombreEdad(Jaime)

function cumpleanos(persona){
    return{
        ...persona,
        edad : persona.edad +1,
        sexo : 'Masculino'
    }
}   
