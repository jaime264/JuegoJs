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

function imprimirNombreEnMayusculas({nombre}){
    nombre = nombre.toUpperCase();
    console.log(nombre)
}

imprimirNombreEnMayusculas(Jaime)
imprimirNombreEnMayusculas(Dario)
imprimirNombreEnMayusculas({nombre:'Pepito'})
imprimirNombreEnMayusculas({apellido:'Rios'})