var jaime = {
    nombre : 'Jaime',
    apellido : 'Rios',
    edad : 28,
    altura : 1.9
}

var juan = {
    nombre : 'juan',
    apellido : 'Robles',
    edad : 30,
    altura : 1.8
}

var sara = {
    nombre : 'sara',
    apellido : 'mejia',
    edad : 24,
    altura : 1.55
}

var carla = {
    nombre : 'carla',
    apellido : 'Gonzales',
    edad : 22,
    altura : 1.60
}

const esAlta = ({altura}) => altura >= 1.8 
const esBaja = ({altura}) => altura <1.8

var personas = [jaime, juan, sara, carla] 

var personaAlta = personas.filter(esAlta)
var personaBaja = personas.filter(esBaja)

console.log(personaBaja)
console.log(personaAlta)