const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id){

  return new Promise((resolve, reject) => {
      const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
      $.get(url, opts, function(data){
          resolve(data)
        })
        .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`Sucedio un error`)
}

// obtenerPersonaje(1)
//   .then(function(personaje){
//     console.log(`El personaje 1 es :  ${personaje.name}`)
//   })
//   .catch(onError)
// ENCADENADAS______________________________________________________
obtenerPersonaje(1)
  .then(function(personaje){
    console.log(`El personaje 1 es :  ${personaje.name}`)
    return obtenerPersonaje(2)
  })
  .then(personaje => {
    console.log(`El personaje 2 es :  ${personaje.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje => {
    console.log(`El personaje 3 es :  ${personaje.name}`)
  })
  .catch(onError)

//MULTIPLES PROMESAS EN PARALELO


// var promesas = ids.map(function(id){
//   return obtenerPersonaje(id)
// })



//Para poder usar AWAIT debemos marcar la funcion con la palabra async

async function obtenerPersonaje(){
  var ids = [1,2,3,4,5,6,7,8,9,10]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    //Usando await
    var personajes = await Promise.all(promises)
    console.log(personajes)
  } catch (e) {
    onError(id)
  }
}
obtenerPersonaje()
