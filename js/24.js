//Foor loop 
// for(let i = 0; i <= 10; i++ ){
// console.log(i)
// }

// for(let i = 0; i <= 100; i++ ){
//     if(i%2===0){
//         console.log(`El Numero ${i} es par`)

//     }
//     else{
//         console.log(`El Numero ${i} es impar`)
//     }
// }

const carrito =[ 
    { nombre: ' Monitor 20 Pulgadas ' , precio : 500 } ,
    { nombre: ' Televisión 50 Pulgadas ' , precio : 700 } ,
    { nombre: ' Tablet ' , precio : 300 } ,
    { nombre: ' Audifonos ' , precio : 200 } ,
    { nombre: ' Teclado ' , precio : 50 } ,
    { nombre: ' Celular ' , precio : 500 } ,
    { nombre: ' Bocinas ' , precio : 300 } ,
    { nombre: ' Laptop ' , precio : 800 },

];

for(let i = 0;i < carrito.length;i++){
    console.log(carrito[i].nombre)
}



//While loop
let ind=1;//indice 

while(ind<=100){//condicion

    if(ind % 2 ===0){
    console.log(`El numero ${ind} Es par `)
    }else{
        console.log(`El numero ${ind} Es impar `)
    }

ind++;//incremento
}


//Do while loop

let i=100;

do{
    console.log(i);
    i++;
}while(i<10);
