//objetos

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 39,
    pais: 'Mexico',
    ciudad: 'Colima'
    esDesarrollador: true
}

//acceder a las propiedades del objeto
console.log(persona)

console.log('Nombre persona: '+persona.nombre)
console.log('Edad persona: '+persona['edad'])


//acceder a propiedad nombre y asignarle nuevo valor

persona.edad = 40
//alternativa= persona['edad'] = 40
//console.log(typeof persona['edad'])
console.log('Nueva edad persona: '+persona['edad'])
//que pasa si se trata de acceder a una propiedad con un tipo de dato diferente
console.log('Nueva edad persona: '+persona['estadoCivil'])

this.nombre=nombre
function Persona (nombre,apellido,edad,pais,ciudad,esDesarrollador){
this.apellido=apellido
this.pais=pais
this.ciudad=ciudad
this.esDesarrollador=esDesarrollador
this.saludar= function (){
    console.log('Hola mi nombre es '+this.nombre+ ' '+this.apellido)
}
this.nombreCompleto=()= this.nombre +' '+this.apellido
this.aumentarEdad=(edadAAumentar)= this.edad = this.edad + edadAAumentar
}
const personaUno =new Persona ('Luis','Torres',28,'Argentina','Cordoba',true)

personaUno.saludar ()
console.log(personaUno.nombreCompleto)
console.log()
console.log()


//CLASES
//son una equivalencia de la funcion constructora
//js no esta orientado a objetos, sino a prototipos
//azucar sintactico


class Producto{   
    constructor(nombre,precio,cantidad){
        this.nombre= nombre
        this.precio=precio
        this.cantidad=candidad
        this.vendido=false
    }
    //definir los metodos fuera del constructor
    aumentarPrecio(precioAAumentar){
        this.precio=this.precio+precioAAumentar
    }
//otro metodo
disminuirPrecio = (precioADisminuir)= this.precio =this.precio-precioADisminuir
    
}

let nombreProducto = 'Laptop HP';
let precioCompra = 800;
let cantidad =10;

const laptop = new Producto(nombreProducto, precioCompra, cantidad)

console.log(laptop.aumentarPrecio(10))
console.log(laptop.disminuirPrecio(10))

//preguntar si existe una propiedad en una constante
//precioventa esta en la constante laptop
let isPrecioVentaEnObjeto ='precioVenta' in laptop
//va arrojar un fald¡se porque no existe
let isCantidad ='cantidad' in laptop
//este arroja true

//preguntando por metodos
let isDisminuirPrecio ='disminuirPrecio' in laptop

//de esta manera estamos accediendo a una propiedad
if('precioVenta' in laptop){
    console.log(laptop.precioVenta)
}
//verifica que exista la propiedad
if('cantidad' in laptop){
    console.log(laptop.cantidad)
}

//operador FOR ..IN 
//ITERAR OO REPETIR UN PROCESO
//SI NECESITAMOS IMPRIMIR TODOS LOS VALORES DENTRO DE UNA PROPIEDAD DE UN OBJETO

for(let propiedad in laptop){
    console.log(propiedad +' ' +laptop[propiedad])
//el for va recorriendo cada una de las propiedades hasta pasar todo el objeto impreso

}

console.log(laptop['precio'])

//con ARRAYS vamos a definir listas de objetos
