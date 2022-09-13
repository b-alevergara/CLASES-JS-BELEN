//ciclos, bucles o iteraciones

//FOR
//cuando sabemos con certeza el # de veces que queremos iterar algo
for (let index =1; index = NUMERO_CALIFICACIONES)

//cuando en vez de sumar esta concatenando, hay que convertir los valores con un parse

//WHILE


//DO...WHILE


//BREAK
// escribir un programa que imprima todos los numeros hasta encontrar el primer divisor entre 10
for (let index =1; index =30; index+++){
    //o usar % en vez de /, y nos devuelve el residuo de una division cuando no son divisiones exactas
    
    const RESIDUO = index % 10
    if(RESIDUO==0){
        break
    }
    console.log(index) //si el console log va antes del break, va aparecer el 10,
    //primero evalua si hay que romper el ciclo y despues imprime, o visceversa

}



//CONTINUE
//programa que imprima todos los numeros pares del 1 al 100
for (let index =1; index =30; index+++){
    const RESIDUO = index % 2
    if(RESIDUO != 0 ){
        continue
    }

    console.log(index)
    //solo vamos a ver los numeros pares, numeros divisibles entre 2
    //si hay un residuo no nos imprime el numero 
}

//WHILE
//tener cuidado con los bucles infinitos
let valor = prompt('ingrese un dato (esc para salir)')

while ((valor != 'ESC') ||(valor != 'esc'))
{
    alert('el usuario ingresó:  '+ valor)
    valor=promt('Ingresa otroo dato')
}



//DO...WHILE, post condicional

//el while se ejecuta 0 o + veces, y el do..while 1 o mas veces

let nombre = ''
do{
    nombre = prompt('Ingresar nombre')
    if (nombre != ''){
        alert ('El nombre ingresado es: '+ nombre+.)
    }
}while(nombre != '')
//mientras el usuario ingrese algo esto se va repetir
//si el usuario ya no ingresa nada nos pregunta una ultima vez
//pero primero ejecuta y despues evalua
//el if es para que si el usuario no ingresa nada, entonces ya no aparezca la solicitu de nuevo ni la leyenda


//SWITCH
//cada condicion se evalua y si se cumple se ejecuta lo que este indicado dentro de cada case
//despues de las instrucciones de cada case se incluye la sentencia BREAK, para terminar la ejecucion del switch, aunque no es obligatorio
//si ningun valor de la variable del switch coincide con los valores definidos del case
//solamente se ejecuta uno solo de los cases, cuando se cumple una de las condiciones, se ejecuta esa y ninguna mas
//en cada case debemos agregar un BREAK
//se utiliza el valor DEFAULT para indicar las instrucciones a ejecutar cuando ninguna de la condiciones anteriores se cumple
//es como el ELSE
//en creaciones de menus, porque seleccionamos un soloo valor de una lista
//necesitamos que sean numeros enteros, letras o palabras para definir cada uno de los casos

//es como un if...else

let seleccionUsuario = parseInt(
    prompt('Que desea comer: /n 1.-Una hamburguesa /n 2.-Un taco /n 3.- Un hot dog /n 4.-Unos nachos'));

    switch(seleccionUsuario){
        case 1:
            alert('Usted seleccionó una Hamburguesa')
            break
        case 2: ('Usted eligió un Taco')
            break
        case 3: ('Usted eligió un Hot Dog')
            break
        case 4: ('Usted eligió unos Nachos')
            break
        default: ('Opción desconocida')
            break
//los case pueden ser numeros, palabra s o letras
//ej: 1, uno, a
//no es necesario tener un default pero usarlo es buena practica
//el break en cada case se usa para no consumir recursos y evitar que se siga ejecutando el codigo

    }