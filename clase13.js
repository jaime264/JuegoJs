var sasha = {
    nombre: 'Sasha',
    apellido : 'Navarro',
    edad : 28,
    peso : 60
}

console.log(`al inicio del año ${sasha.nombre} pesa ${sasha.peso}kg `)

const INCREMENTAR_PESO = 0.20
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTAR_PESO
const adelgazar = persona => persona.peso -= INCREMENTAR_PESO

for(var i = 0; i<=DIAS_DEL_ANO; i++){
    var random = Math.random();
    
    if(random < 0.25){
        //aumenta de peso
        aumentarDePeso(sasha)
    }else if(random < 0.50){
        //adelgazar
        adelgazar(sasha)
    }
}


console.log(`al final del años ${sasha.nombre} pesa ${sasha.peso.toFixed(1)}kg `)