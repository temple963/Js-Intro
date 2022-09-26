const reservation = {
    name: 'humberto',
    lastName:'Ruz',
    total:5000,
    payment:false,
    information:function(){
        console.log(`El Cliente ${this.name} Reservo y tiene un adeudo  total de ${this.total}`)
    }
}

const reservation2 = {
    name :'Pepe',
    lastName:'Toño',
    total:8000,
    payment:false,
    information:function(){
        console.log(`El Cliente ${this.name} Reservo y tiene un adeudo  total de ${this.total}`)
    }
}

reservation.information();
reservation2.information();