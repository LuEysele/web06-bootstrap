console.log("JS08 - Clases");

const getProducts = async() =>{
    const url = "https://fakestoreapi.com/products";
    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log(response);
}

/**
 * Clase de productos
 * El nombre de las clases se realizan con UpperCamelCase
 */
class Products{
    //definimos atributos

    //El método constructor nos ayuda a instanciar un objeto
    constructor(id, name){
        this.name = name;
        this.id = id;
        this.createAt = new Date().getTime();
        console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
    }
    
    lifeSpan(){
        return new Date().getTime() - this.createAt;
    }
}

function createProductsOfClassProducts(){
            //Instanciar la clase products para crear un objeto
    const zote = new Products(1, "Zote");
    const products = [];
    products.push( zote )
    products.push( new Products(2, "Palmolive"));
    products.push( new Products(3, "Coca-Cola"));
    products.push( new Products(4, "Cajeta Corona"));

    console.table(products);
}

createProductsOfClassProducts();