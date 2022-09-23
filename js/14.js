//Arrays

const numeros= [10,20,30,40,50];

console.table(numeros);



// //Accediendo a valores del arreglo  
//  console.log(numeros[4]);
//  console.log(numeros[2]);

//  //Conocer la extencion de  un array con  lenght

//  console.log(meses.length)

//  numeros.forEach(function(numero){
//     console.log(numero)
//  })
//con  push se agregan datos al arreglo consecuente mente despues del ultimo
numeros.push(60,70,80)
// unshift sirve para agregar datos al inicio del arreglo del ultimo volviendose el primer dato la posicion 0
numeros.unshift(-20,-30,-40)
console.table(numeros)



const meses =new Array('enero','febrero','Marzo','Abril','Mayo');
 

//  meses.pop(); // este metodo elimina el ultimo elemento del array
//  meses.shift();// este metodo elimina el primer elemento del array 

// meses.splice(2,1)// el metodo splice elimina un valor determinado, este se determna por la posicion del primer digito 
// // en este caso el 2 y elima la cantidad de valor establecidos despues en este caso 1
// console.table(meses);

const nuevoArreglo=['Septiembre',...meses,'junio']
console.log(nuevoArreglo)