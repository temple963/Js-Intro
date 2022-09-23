const meses =['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito =[ 
    { nombre: ' Monitor 20 Pulgadas ' , precio : 500 } ,
    { nombre: ' Televisión 50 Pulgadas ' , precio : 700 } ,
    { nombre: ' Tablet ' , precio : 300 } ,
    { nombre: ' Audifonos ' , precio : 200 } ,
    { nombre: ' Teclado ' , precio : 50 } ,
    { nombre: ' Celular ' , precio : 500 } ,
    { nombre: ' Bocinas ' , precio : 300 } ,
    { nombre: ' Laptop ' , precio : 800 },

]

//foreach es un array method
meses.forEach(function(mes){
 if(mes== 'Marzo'){
    console.log('Marzo si Exsite')
 }
})

//includes 
// let resultado = meses.includes('Marzo');
// console.log(resultado);

//some ideal para verificar la existencia en arreglos de objetos 

// resultado2 = carrito.some(function(product){
//     return product.nombre ==='Laptop'
// })

// console.log(resultado2);

resultado = carrito.some ( function ( producto ) {
    return producto.nombre === ' Laptop '
} )

//Reduce para sacar la sumatoria de los totales 
resultado = carrito.reduce(function(total,producto){
    return total + producto.precio
},0);

//Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});


console.log ( resultado ) ;
