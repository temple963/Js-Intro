//Arrow functions
    const sumar2 = (n1,n2)=>{
        console.log(n1+n2)
    }
    sumar2(5,10);
    
    
    const aprendiendo =(tecnologia) =>{
        console.log(`Aprendiendo ${tecnologia}`)
    }
  
    aprendiendo('Javascript ')

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
meses.forEach(mes=>{
 if(mes== 'Marzo'){
    console.log('Marzo si Exsite')
 }
})

// console.log(resultado2);

resultado = carrito.some (producto =>producto.nombre === 'Audifonos PRomax')
console.log ( resultado ) ;


//Reduce para sacar la sumatoria de los totales 
resultado = carrito.reduce((total,producto) =>total + producto.precio,0);
console.log ( resultado ) ;


//Filter
resultado = carrito.filter(producto=> producto.precio > 400);
console.log ( resultado ) ;

resultado = carrito.filter(producto=>producto.nombre !== 'Laptop');

console.log ( resultado ) ;

