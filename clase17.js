var jaime = {
    nombre : 'Jaime',
    apellido : 'Rios',
    edad : '28'
}

var juan = {
    nombre : 'juan',
    apellido : 'Robles',
    edad : '30'
}

var sara = {
    nombre : 'sara',
    apellido : 'mejia',
    edad : '24'
}

var carla = {
    nombre : 'carla',
    apellido : 'Gonzales',
    edad : '22'
}

var personas = [jaime, juan, sara, carla] 

for(i = 0; i < personas.length; i++){
    console.log(`Mi nombre es ${personas[i].nombre}`)
}

const array = [
    function () {
      console.log('hola')
    },
    function () {
      console.log('mundo')
    },
    function () {
      console.log('!')
    }
  ]
  
  array[0]()
  array[1]()
  array[2]()