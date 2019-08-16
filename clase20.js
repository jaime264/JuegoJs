var jaime = {
    nombre : 'Jaime',
    apellido : 'Rios',
    edad : 28,
    altura : 1.9,
    cantidadLibros : 55

}

var juan = {
    nombre : 'juan',
    apellido : 'Robles',
    edad : 30,
    altura : 1.8,
    cantidadLibros : 20
}

var sara = {
    nombre : 'sara',
    apellido : 'mejia',
    edad : 24,
    altura : 1.55,
    cantidadLibros : 55

}

var carla = {
    nombre : 'carla',
    apellido : 'Gonzales',
    edad : 22,
    altura : 1.60,
    cantidadLibros : 220

}

var personas = [jaime, juan, sara, carla] 
var acum1 = 0

for(var i = 0; i < personas.length; i++){
acum1 = acum1 + personas[i].cantidadLibros }

const recuder = (acum, {cantidadLibros}) => acum + cantidadLibros

var totalDeLibros = personas.reduce(recuder,0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
console.log(`En total todos tienen ${acum1} libros`)


