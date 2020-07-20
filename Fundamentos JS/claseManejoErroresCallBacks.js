const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get('https://swapi.co/api/people/1', function (err, luke) {
          console.log(luke.name)
        })

        console.log('Sacha')
}

obtenerPersonaje(1)

obtenerPersonaje(1, function(personaje){
  console.log(`Hola, mi nombre es ${personaje.name}, todo bien?`)

  obtenerPersonaje(2, function(personaje){
    console.log(`Hola, mi nombre es ${personaje.name}, todo bien?`)

    obtenerPersonaje(3, function(personaje){
      console.log(`Hola, mi nombre es ${personaje.name}, todo bien?`)

      obtenerPersonaje(4, function(personaje){
        console.log(`Hola, mi nombre es ${personaje.name}, todo bien?`)

        obtenerPersonaje(5, function(personaje){
          console.log(`Hola, mi nombre es ${personaje.name}, todo bien?`)

          obtenerPersonaje(6)
        })
      })
    })
  })
})
