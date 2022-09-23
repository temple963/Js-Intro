// Booleans y objetos 

const Producto={
    nombreProducto:"Monitor 20 Pulgadas",
    Precio:300,
    Disponible:true,    

}

Producto.imagen='imagen.jpg'// agregar nuevas propiedades 

console.log(Producto);

delete Producto.Disponible;
console.log(Producto);

//sintaxis de punto 

// console.log(Producto.nombreProducto);
// console.log(Producto.Precio);
// console.log(Producto.Disponible);

//sintaxis other 
// console.log(Producto['Precio']);

