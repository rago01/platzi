const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (personaje){
  console.log(`Hola, mi nombre es ${personaje.name}, todo bien?`)
}

function obtenerPersonaje(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
