var oscar = {
    nombre: 'Óscar',
    apellido: 'García',
    edad: 22,
    peso: 68,
    altura: 1.60
}

var camila = {
    nombre: 'Camila',
    apellido: 'Sanchez',
    edad: 24,
    peso: 57,
    altura: 1.58
}

var pako = {
    nombre: 'Pako',
    apellido: 'Sanchez',
    edad: 17,
    peso: 7,
    altura: 1.15
}

var javier = {
    nombre: 'Javier',
    apellido: 'García',
    edad: 22,
    peso: 60,
    altura: 1.90
}

var maria = {
    nombre: 'Maria',
    apellido: 'Sanchez',
    edad: 24,
    peso: 50,
    altura: 1.70
}

var felipe = {
    nombre: 'Felipe',
    apellido: 'Zapata',
    edad: 17,
    peso: 58,
    altura: 1.15
}


const esBaja = persona => persona.altura < 1.8

var personas = [camila, oscar, pako, felipe, maria, javier]

const esAlta = ({ altura }) => altura > 1.8

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => {
    persona.altura = peprsona.altura * 100
}

var personasCms = personas.map()