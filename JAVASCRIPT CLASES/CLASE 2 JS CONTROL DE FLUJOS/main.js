//constante
//con prompt estoy solicitando un dato al usuario
const EDAD = prompt('Ingresa tu edad')

if (EDAD == 18){
    alert('Puedes consumir alcohol')
}

//con variables
//case sensitive= significa que van a tomar en cuenta las mayusculas a minusculas, hay herramientas para ayudarnos a convertir minusculas a mayusculas y visceversa
//la condicion va ser falsa si no esta escrita correctamente
let nombre = prompt('ingresa tu nombre')
if (nombre == 'Ana'){
    alert('Hola Ana')
}

//if ..... else = si no ..., entonces ...
//esta es una condicional que se va realizar si no se cumple la primera

//anidaciones

let vidaPersonaje = 100

if(vidaPersonaje == 100){
    alert('La vida está completa')
}  //si aqui cambio la variable a un numero diferente a 100, ya no me va mostrar el alert
else if (vidaPersonaje ==50 ){
    alert('La vida está a la mitad')
}
else if (vidaPersonaje ==0){
    alert('El personaje murió')
}
else if (vidaPersonaje <20 ){
    alert('La vida del personaje es ' + vidaPersonaje)
}
//todo lo que este debajo de la primera condicional que se cumple,
//no se va tomar en cuenta, es mejor tener pocas comparaciones y que no choquen

//operacion booleana
const NUMERO =5;
let esMayor = NUMERO >6
console.log(esMayor)

if(esMayor){
    alert('El numero 5 es mayor')
}

const SIEMPRE_VERDADERO = true
console.log(SIEMPRE_VERDADERO)

//
const NUMERO_UNO = parseInt(prompt('Ingrese el primer numero'))
const NUMERO_DOS = prompt('Ingrese el segundo numero')

console.log(typeof NUMERO_UNO)
console.log(typeof NUMERO_DOS)

if(NUMERO_UNO !== NUMERO_DOS){ //si aqui el estrictamente diferente lo cambio por un diferente != me va decir que los numeros son iguales aunque los tipos de datos sean diferentes
    alert{('Los numeros son diferentes')
    }
    else{
        alert('Los numeros son iguales')
    }
}
//type of
//siempre que usemos el prompt, todo lo que el usuario ingrese va ser en string

//el parseInt sirve para que convierta el resultado y me lo devuelva por ej. en numero,
//o sea que puedo cambiar el tipo de datos



