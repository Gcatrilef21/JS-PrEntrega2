/*
    Funciones de Orden Superior (Metodos de Busqueda y transformacion )
    Funciones comunes con variables, constantes, arrays,etc
    Objeto JS - Array de objetos literales
    Logica funcional
    entradas - Salidas (prompt, alert)

*/
let total = 0 

const carrito= []

const quesos = [ {id:1, nombre: 'AMERICAN CHEESE', precio: 9950, origen: 'Inglaterra'},
                 {id:2, nombre:'BLUE CHEESE', precio:18990, origen:'Francia'},
                 {id:3, nombre:'BRIE CHEESE', precio:19990, origen:'Francia'},
                 {id:4, nombre:'CAMBERT CHEESE', precio:15990, origen:'Francia'},
                 {id:5, nombre:'CHEEDAR CHEESE', precio:7980,origen:'Inglaterra'},
                 {id:6, nombre:'EDAM CHEESE', precio:15990, origen:'Países Bajos'},
                 {id:7, nombre:'GOUDA CHEESE', precio:5990, origen:'Países Bajos'},
                 {id:8, nombre:'FETA CHEESE', precio:12990, origen:'Grecia'}]


//debugger 
function saludar() {
    let nombre = (prompt('Ingrese su nombre: ')).toUpperCase()
    if (nombre === '') {
        let respuesta = confirm('Desea Ingresar su nombre ? ')
        if (respuesta === true) {
            saludar()
        } else if (nombre !== true){
            alert('Bienvenid@ a MMMCheese 🧀 ')
            console.log('Bienvenid@ a MMMCheese 🧀 ')
        }
    } else {
        alert('Bienvenid@ ' + nombre + '\n Esto es MMMCheese 🧀 ')
        console.log('Bienvenid@ ' + nombre + '\n Esto es MMMCheese 🧀 ')
        iniciarComprar()
    }
}


function iniciarComprar() {
        let elec = prompt ('🧀 ¿Que Deseas Hacer? 🧀: \n \n 1. Agregar un Producto \n 2. Borra Ultimo Producto  \n 3. Ver Total Carrito \n 4. Finalizar Comprar')
        if (elec === null ){
            alert ('Debe elegir una de las opciones mostradas')
            iniciarComprar()
        }else if (parseInt(elec) === 1){
            agregarProducto()
        }else if (parseInt(elec) === 2){
            borrarProducto ()
        }else if (parseInt(elec) === 3){
            mostrarPrecios()
        }else if (parseInt(elec) === 4){
            terminarCompra()
            console.table(carrito)
            alert('Gracias por visitarnos, hasta pronto!! 👋🐭🧀')
        }
}

function buscarVariedad(codigo) {
    let resultado = quesos.find((queso) => queso.id === parseInt(codigo))
    return resultado
}

function terminarCompra() {
    const bag = new Compra (carrito)
    alert(' El Total de su compra es: $ ', bag.sumarPrecios())
    console.log (' El Total de su compra es: $ ', bag.sumarPrecios())
}
function finalizarCompra() {
    const shopping = new Compra(carrito)
    console.log(`El costo total de su compra es de $ ${shopping.obtenerSubtotal()}. Muchas gracias por tu compra!`)
}

function borrarProducto (){
    if(carrito.length > 0){
        let prodquitado =  carrito.pop()
        alert('Se ha eliminado el siguiente producto ' + prodquitado.nombre)
        console.log ('Se ha eliminado el siguiente producto ')
        console.table(carrito)
        iniciarComprar()
    }else{
        alert('⛔ El Carrito se encuentra vacio 😲')
        console.log ('⛔ El Carrito se encuentra vacio 😲')
        iniciarComprar()
    }
}

function mostrarPrecios(){
    carrito.forEach((carrito)=>{
        total += carrito.precio
        alert('Este es el total de los productos seleccionados $' + total)
        console.log('Este es el total de los productos seleccionados $' + total)
        console.table(carrito)
    })
    iniciarComprar()
}

function agregarProducto(){
    let codigo = prompt('Selecciona un 🧀 de nuestra variedad: \n \n 1. American \n 2. Blue \n 3. Brie \n 4. Cambert \n 5. Cheedar \n 6. Edam \n 7. Gouda \n 8. Feta')
    let queSelec = buscarVariedad(codigo)
    if (queSelec != undefined) {
        carrito.push(queSelec)
        alert(queSelec.nombre.toUpperCase(), 'se agregó al carrito 🍷🧀.')
        console.log(queSelec.nombre.toUpperCase(), 'se agregó al carrito 🍷🧀.')
        console.table(carrito)
        let otraSelec = confirm ('¿Te gustaria agregar otro producto? ')
        if(otraSelec === true){
            agregarProducto()
        }else{
            iniciarComprar()
        }
    }else{
        let respuesta = confirm ('😲 No has escogido una opción valida, Quieres intentarlo nuevamente? ')
        if(respuesta === true ){
            agregarProducto()
        }else{
            alert('Gracias por visitarnos, hasta pronto!! 👋🐭🧀')
        }
    }
}
