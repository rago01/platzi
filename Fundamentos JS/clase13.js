var oscar = {
    nombre: 'Óscar',
    apellido: 'García',
    edad: 22,
    peso: 60
}

var camila = {
    nombre: 'Camila',
    apellido: 'Sanchez',
    edad: 24,
    peso: 58
}

var pako = {
    nombre: 'Pako',
    apellido: 'Sanchez',
    edad: 17,
    peso: 15
}

console.log(`Al inicio del año ${camila.nombre} pesa ${oscar.peso}Kg`)

const INCREMENTO_PESO =0.2;
const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= 365; i++) {
    var random = Math.random();
    
    if (random < 0.25) {
         aumentoDePeso(camila)
    }else if (random < 0.5) {
        adelgazar(camila)
    }
}

console.log(`Al final del año ${camila.nombre} pesa ${camila.peso.toFixed(1)}Kg`)