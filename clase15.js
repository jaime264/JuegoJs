var contador = 0

const llueve = () => Math.random() < 0.25

do {
 contador++

}while(!llueve())

if(contador === 1){
    console.log(`fui a ver si llovia ${contador} ves`)
}else{
    console.log(`fui a ver si llovia ${contador} veces`)
}
//console.log(`fui a ver si llovia ${contador} veces`)

