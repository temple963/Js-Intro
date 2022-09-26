//POO or programing orientend objects 

//Object literal
const productss ={
    name:'Tablet',  
    precio :500
}

// Object constructor 

    function product(name, price,aviable){
    this.name=name;
    this.price=price;
    this.aviable=aviable
    }

    const product2= new product('Monitor curvo 49"',800,false)
    const product3= new product('laptop',300,false)
    const product4= new product('coffemaker',100,true)
    const product5= new product('cellphone',500,true)

    console.log(product2)
    console.log(product3)
    console.log(product4)
    console.log(product5)
    



