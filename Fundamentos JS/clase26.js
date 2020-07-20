
class Persona{
      constructor(nombre,apellido,altura){

              this.nombre =nombre;
              this.apellido=apellido;
              this.altura=altura;
          }

          saludar(fn){
              console.log(`Hola me llamo ${this.nombre}${this.apellido}`)
              if (fn) {
                fn(this.nombre, this.apellido)
              }
          }

          soyAlto(){
              if(this.altura>=1.8){
                  console.log(`La persona ${this.nombre}, es Alt@`)
              }else{
                  console.log(`La persona ${this.nombre}, no es Alt@`)
              }
          }
        }

  class Desarrollador extends Persona{

        constructor (nombre,apellido,altura){
            super(nombre,apellido,altura)
        }

        saludar(fn){
            console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador/a`)
            if (fn) {
              fn(this.nombre, this.apellido, true)
            }
        }
      }

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
      console.log(`Ah mira, no sabía que eras Desarrollador/a`);
  }
}

var camila = new Persona('Camila', 'Sanchez', 1.60)
var oscar = new Desarrollador('Oscar','Garcia',1.70)
var pako = new Persona('Pako','Alvarado', 1.90)

camila.saludar(responderSaludo);
oscar.saludar(responderSaludo);
