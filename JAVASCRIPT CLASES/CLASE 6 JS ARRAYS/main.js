//SORT
// let calificaciones = [10, 9, 8, 6, 7, 8, 5, 5, 10, 9]

// function ordenar (arr){
//     return arr.sort(a,b) => a-b  //para ordenar de mayor a menor se usa el .sort() sin nada adentro
//     //y para ordenar de menor a mayor con a-b
// }
// //call back para ordenar de menor a mayor


// console.log (calificaciones)

//FILTER para ver solo los aprobados de calificaciones
//para nosotros cambiarle la nota minima agregamos cal, y el valor de cal se indica en el console log
// function aprobados (arr, calificacion){
//     ordenar(calificaciones)
//     let respuesta = arr.filter(nota => nota > calificacion ) 
//     return respuesta
// }
//es igual que esto pero abreviado:
//function aprobados arr.filter(nota => nota >6)

// console.log(aprobados(calificaciones, 6)) //aqui ponemos el valor en el orden de la funcion y es awqui en donde podemos cambiar el valor a otros numeros

//cantidad de alumnos que obtuvieron una calificacion
// function cantidad (arr, cal){
//     if(arr.includes(cal)){
//         return arr.filter(nota => nota === cal).lenght   //nos va dar el tamaño que tiene el filtro, es decir numero de alumnos con esa calificacion

//     }
//     return 'Ningún alumno obtuvo la nota: ${cal}'  //para poder utilizar una variable dentro de los strings, se deben usar la ` comilla medio ladeada(backtick)
//     console.log(cantidad(calificaciones, 8))

// }

let productos= [  //poner objetos dentro de arrays
    {nombre: 'caucho granulado',
    precio: 450},
    {nombre: 'caucho pulverizado',
    precio: 650},
//elija el producto a comprar
//crear un mensaje para usarlo despues
]
function crearMensaje (){
    let mensaje= 'Elige el producto que deseas comprar'
    let contador=1  //inicializarlo en 1 para opciones

    for(let producto of productos){ //aqui va ir iterando el producto de todos los productos
        mensaje += `\n${contador}.- ${producto.nombre} - $ ${producto.precio}`
        count++
    }
    mensaje += `\n${count}. Salir`;
    return mensaje
    //falta concatenar al mensaje la opciond e salida
}
//    prompt(crearMensaje())
//una cantidad de producto
//un subtotal y un total de compra

function cantidad (producto){
    return prompt(`Cuantos kilos de ${producto.nombre} desea comprar?`)
}

function subtotal (cantidad, producto){
    alert(`Usted selecciono ${cantidad} kilos de ${producto.nombre} . Esto suma un total de $ ${cantidad * producto.precio}`) //guardar esta operacion en una variable
    return cantidad * producto.precio
}

function total (array){  //para sumar 
    return array.reduce((acumulador, el)=> acumulador + el, 0 )

}

let opcion = 0
let total = []
let compra = 


do{
    opcion = parseInt(prompt(crearMensaje()))

    if (opcion === productos.length + 1){
        alert(`El total de su compra es de $ ${calcularTotal(total)}. \nGracias por tu compra.`)
        break
    }

compra.push(productos[opcion-1]) 

    total.push(subtotal(cantidad(productos[opcion - 1])))
//para que sirve el push?
//podemos hacer otro push que envie el producto completo

}while(true)  //(1.13.22 del video)