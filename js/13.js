const producto = {

    nombreproducto: " Monitor 20 Pulgadas " ,
    precio : 300 ,
    disponible : true
}


const medidas= {
    peso:"1 KG",
    medida: "1m",

}
// union de objetos con operador ...
const nuevoProducto={...producto,...medidas}

console.log(producto)
console.log(nuevoProducto)