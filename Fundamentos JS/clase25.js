//------> 1. CLASS (Palabra reservada, todo sigue siendo prototipo)
// ESTA "CLASE" SIEMPRE SE CONOCE COMO PROTOTIPO EN JAVASCRIPT
class Persona{
      constructor(nombre,apellido,altura){
          //------> 2. Constructor
              this.nombre =nombre;
              this.apellido=apellido;
              this.altura=altura;
          }
          //------> 3. SINTAXIS DE MÉTODO
          saludar(){
              console.log(`Hola me llamo ${this.nombre}${this.apellido}`)
          }
          soyAlto(){
              if(this.altura>=1.8){
                  console.log(`${this.nombre}, es Alt@`)
              }else{
                  console.log(`${this.nombre}, no es Alt@`)
              }
          }
        }
         //------>  4. Herencia en JS
  class Desarrollador extends Persona{
        constructor (nombre,apellido,altura){
        //super es obligatorio para poder acceder a los
        // atributos del padre(this.), ->trae el constructor de la clase padre
            super(nombre,apellido,altura)
        }
        saludar(){
            console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador/a`)
        }
  }
