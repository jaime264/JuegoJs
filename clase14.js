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
const adelgaza = persona => persona.peso -= INCREMENTAR_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META = sasha.peso - 3
var dias = 0;

while(sasha.peso > META){
    if(comeMucho()){
        aumentarDePeso(sasha)
    }else if(realizaDeporte){
        adelgaza(sasha)
    }

    dias++
}


console.log(`pasaron ${dias} hasta que ${sasha.nombre} adelgazo 3kg `)