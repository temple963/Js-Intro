const Producto={
    nombreProducto:"Monitor 20 Pulgadas",
    Precio:300,
    Disponible:true,    

}
//modelo antiguo
console.log(Producto)

// const precioProducto=Producto.Precio;
// const nombreProducto=Producto.nombreProducto;

// console.log(precioProducto);
// console.log(typeof precioProducto);
// console.log(nombreProducto);

//Desctructuring
const{Precio,nombreProducto}=Producto;

console.log(Precio)
console.log(typeof nombreProducto)