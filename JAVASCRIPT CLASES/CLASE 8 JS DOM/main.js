// console.log(document) //para acceder al documento

// console.log(document.head) 
// console.log(document.body)

//aqui me va mostrar el head de mi documento, cada etiqueta va ser un node
//a partir de estos vanmos a poder modificar o agregar elementos como divs desde js
//cada etiqueta se convierte en un nodo tipo elemento
//ej. html, head, body, title
//nodos raiz solo 2: head y body
//en chrome podemos editar el dom desde ELEMENTS
//tipos de nodos:
//document, de este derivan todos los otros
//element, representa etiquetas html
//attr representa atributos de etiquetas (atributo valor)4
//text
//comment representa comentarios

//ACCESO AL DOM
//metodos: getElementById()
//getElementsByClassName()
//getElementsBy

//OBTENER ELEMENTOS POR ID van a aparecer en consola
//nos va devolver 1 solo elemento
let divUno = document.getElementById("contenedor-ejemplo-uno")
let parrafoUno = document.getElementById("parrafo1")

console.log(divUno)
console.log(parrafoUno)
//me va imprimir

//OBTENER ELEMENTOS POR CLASS NAME
//nos devuelve una coleccion con este podemos iterar sobre arrays
let listaDivs = document.getElementsByClassName("contenedor-ejemplo-dos")

console.log(listaDivs)

for(const elemento of listaDivs){
    console.log(elemento)
}


//una coleccion se puede iterar, puede tener varios elementos

//OBTENER ELEMENTOS POR TAG NAME
//vamos a poder obtener todos los elementos que sean de una etiqueta html en especifico

let listaItems=document.getElementsByTagName("li");
console.log(listaItems)
//aqui va haber un html collection con 3 elementos li
//la desventaja de usar esto es que si tengo otro elemento li en la pagina
//tambien me lo va enlazar a traves de este llamado (en la consola)

//podemos usar el for of para recorrer la lista
for( const elemento of listaItems){
    console.log(elemento)
}
//revisar cual es la diferencia de este tipo de for of

//OBTENER ELEMENTO USANDO QUERY SELECTOR
//combinar 
//un selector css pero aplicado para js, reutilizamos para enlazar elementos de este lado
//especificar cual es el selecto que quiero usar
//el que quiero que me traiga
//el # es para decir que es un ID
let parrafo= document.querySelector("#contenedor p")

let parrafo= document.querySelectorAll("#contenedor p")
console.log(parrafo)

//usamos query selector cuando queremos ser muy muy especificos
//le decimos que busque un elemento con el id contenedor y que su hijo sea una etiqueta p
//el query selector es mas preciso (solo va obtener 1 elemento)
//con el query selector all es para acceder a todos los elementos

for(const elemento of parrafo){
    console.log(element)
}
//arreglo de etiquetas p (node list en consola)


//AGREGAR TEXTO A UN PARRAFO MEDIANTE JAVASCRIPT
let parrafo = document.getElementById("parrafp-cinco")
console.log(parrafo)
console.log(parrafo.innerText) //acceder al texto del elemento

parrafo.innerText= "Hola!!! este es un parrafo modificado desde js"
//recordar el texto original
console.log(parrafo.innerText)
//inner text para modificar o inyectar texto desde DOM

//inputs para ingresar datos
//etiquetas p y h para mostrar texto

let contenedor = document.getElementById("contendor-siete")
contenedor.className= "bg-blue color-md-6 d-flex"



//EJEMPLO COMPLETO

