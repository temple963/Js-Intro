const teweet ="  Aprendiendo javascript en el curso de desarollo web";
const Producto1_1="Monitor HD";



//length es para el conteo de caracteres 
console.log(Producto1_1.length);

//Indexof es un Metodo para buscar una palabra dentro de un string y toma encuenta espacios
console.log(teweet.indexOf('javascript'));
console.log(teweet.indexOf('juanito'));//da como resultado -1 que significa que no existe 

//includes metodo para (retornar  true o false )
console.log(teweet.includes('javascript'));
console.log(teweet.includes('juanito'))