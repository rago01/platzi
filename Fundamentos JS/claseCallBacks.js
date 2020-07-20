const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 3)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (personaje){
  console.log(`Hola, mi nombre es ${personaje.name}, todo bien?`)
}

$.get(lukeUrl, opts, onPeopleResponse)

console.log('Sacha')
