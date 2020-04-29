var oscar = {
    nombre: 'Óscar',
    apellido: 'García',
    edad: 22
}

var camila = {
    nombre: 'Camila',
    apellido: 'Sanchez',
    edad: 24
}

var pako = {
    nombre: 'Pako',
    apellido: 'Sanchez',
    edad: 17
}

const MAYORIA_DE_EDAD = 18;
/*
const esMayorDeEdad = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
} ESTA FUNCION ES IGUAL A LA DE ABAJO , ABAJO ESTA EN UNA ARROW FUNCTION
*/
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }if(esMenorDeEdad(persona)){
        console.log(`${persona.nombre} es menor de edad`)
    }
}
function imprimirNombreYEdad({ nombre, edad }) {
    console.log("Hola me llamo "+ nombre + " y tengo " + edad + " años")
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO');
    }
}
/*
function esMenorDeEdad(persona){
    if (!esMayorDeEdad(persona)) {
        console.log('Es menor de edad');
    }
}
*/
