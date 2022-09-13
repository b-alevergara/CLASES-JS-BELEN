let nombre = 'Alejandra'
let edad = '24'
//solo le puedo asignar valor a una const 1 sola vez, nunca cambiarla
const BLANCO = ''
//blanco o separador

let calificacionUno = '10'
let calificacionDos = '9'
let calificacionTres = '8'

const SUMA = calificacionUno + calificacionDos + calificacionTres

//imprimir informacion en la cosola, o sea ver la info en la consola
//imprimir la suma
console.log(SUMA)

//restar
const RESTA = calificacionUno - calificacionDos - calificacionTres
//PARA VER EL RESULTADO DE ESTA OPERACION USAR CONSOLE  LOG
console.log(RESTA)

//multiplicacion
const MULTIPLICACION = calificacionUno * calificacionDos * calificacionTres
console.log(MULTIPLICACION)

//promedio
const DIVISION = SUMA/3
console.log(DIVISION)

//concatenar
let palabraUno
let palabraDos
let palabraTres
//cuando imprimimos una variable que no esta definida, nos va arrojar la cnsola como undefined
//en console log podemos imprimir todo lo que queramos
console.log(palabraTres)
//inicializando variables anteriores
palabraUno = 'Bienvenidos '
palabraDos = 'al'
palabraTres = 'curso'

//como hacer para que se muestre espaciado intermedio entre palabras: darle un espacio a un lado de la paabra aun entre comillas
//o concatenar un string que este vacio
const FRASE = palabraUno +BLANCO+ palabraDos+''+palabraTres
//podemos usar tambien /n para un salto de linea o enter entre las concatenaciones


//prompt se usa para solicitarle al usuario datos, 
//se debe meter siempre dentro de una variable
let nombreIngresado = prompt ('Ingrese su nombre');
//despues la consola nos pone un input

//alert solo podemos imprimir strings o cosas que se van a convertir a strings, sino se van a imprimir cosas raras
const NOMBRE = prompt('Ingresa tu nombre')
alert(NOMBRE);
//todo lo que queramos meterle al alert, debe estar ARRIBA del alert
//todo el codigo que haya debajo no se va ejecutar, hasta que el usuario de ACEPTAR para seguir ejecutandose con la siguiente cosa

//como pedir 2 datos diferentes
const EMAIL = prompt('Ingresa tu email')
const ANIO = prompt('Ingresa tu año de nacimiento')
const ANIO_ACTUAL = 2022
console.log(EMAIL)

const EDAD = ANIO_ACTUAL - ANIO
console.log(EDAD)

const FRASE = 'Hola' + BLANCO +NOMBRE+BLANCO+'este año tendras'+BLANCO+EDAD
alert (FRASE)
console.log(FRASE)