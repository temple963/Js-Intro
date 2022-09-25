const metodoPago='efectivo';

switch(metodoPago){
        case'Tarjeta':
        console.log('Pagaste Con tarjeta ');
        break;

        case'Cheque':
        console.log('Revisaremos los fondos');
        break;
 
        case'efectivo':
        console.log('Pagaras con Efectivo ');
        break;

        default:
            console.log('Aun no haz pagado')
            break; 
}