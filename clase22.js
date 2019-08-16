function persona(nombre, apellido, edad, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

var jaime = new persona('jaime','rios', 28, 1.78)
var erika = new persona('erika', 'luna', 33, 1.60)

persona.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function() { 
    return this.altura > 1.7 }

jaime.soyAlto()