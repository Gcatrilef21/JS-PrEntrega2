class Compra{
    constructor(carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    sumarPrecios(){
        if(this.carrito.length > 0){
            return  this.carrito.reduce((acc,queso) => acc + queso.precio, 0)
        }
    }
}

