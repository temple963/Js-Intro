// " use strict " ; // Correr JS en modo estricto
// Objetos
const producto = {

    nombreproducto: " Monitor 20 Pulgadas " ,
    precio : 300 ,
    disponible : true
}

Object.seal ( producto ) ; // .freeze .seal seal te permite modificar valores.
producto.precio = ' NUEVO PRECIO ' ;
delete producto.precio ;
console.log ( producto ) ;