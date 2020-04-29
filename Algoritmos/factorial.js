
number = 2;
function fact(number){
    if (number == 0) {
        return 1;
    }if(number < 0){
        return "No se permiten numeros negativos";
    }else{
        return(number * fact(number-1));
    }
}

/*
function prueba(number){
    do {
        var total= number * (number);
        //console.log(total);
    } while (number != 0);
    
}*/

function viceversa(n){
    if(n>0){
        return (n* viceversa(n));
    }
}

function factorial(num){
        for (var i = 1; i <= num; i++) {
             return total = num * (num-i) 
        }
}

function numeroMayor(x,a){
    if (x>a) {
        return (x+" es Mayor que "+a)
    }else{
        if (x==a) {
            return (x+" es igual a"+a)
        }
        return (a+" es mayor que "+x)
    }
}

function getGreaterNumber(number1, number2){
        if (number1 === number2) {
            console.log('Los numeros son iguales');
            return;
        }
            if (number1 > number2) {
                console.log(number1 +' es mayor que '+number2);
                return;
            }else{
                console.log(number2 +' es mayor que '+number1);
                return;
            }
}

function pares(){
    if (n%2 == 0) {
        alert(n);
    }   
} 

for (var n = 1; n<=100; n++) {
    for (var m = 2; m<=n; m+=2) {
      
    }
}
var limite = 150;

for (var n = 2; n<=limite; n+=2) {
}
        
     



























