const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain : true}

const onPeopleResponse = personaje => console.log(`hola, yo soy ${personaje.name}`)

function obtenerPersonaje(id){

    return new Promise((resolve, reject) => {
        
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $.get(url, opts, function(data){
            resolve(data)
        })
        .fail(()=> reject(id))
    })    
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))    
    
    try {
        var personajes = await Promise.all(promesas)    
        for(i =0 ; i < ids.length;i ++){
            console.log(personajes[i].name)
        }
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()

