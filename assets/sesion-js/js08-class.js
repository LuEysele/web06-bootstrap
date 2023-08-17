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
        // console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
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
    products.push( new Products(5, "Chips"));
    products.push( new Products(6, "Herdez Chícharos"));
    products.push( new Products(7, "Salsa Valentina"));
    products.push( new Products(7, "Sopa Nissin"));

    // console.table(products);
    return products;
}

function lifeSpanProducts( products ){
    // El método mao sobre un arreglo itera sobre cada elemento
    //del srreglo y entrega un nuevo arreglo
    const productsLifeSpan = products.map( product => `<li>${product.name} se creó hace ${product.lifeSpan()/100} s. </li>`)
    return productsLifeSpan;
}

function insertListItems( listItems ){
    const products = document.getElementById("products");

    let unorderList = `<ul>${listItems.join("")}</ul>`

    products.innerHTML = unorderList;
}
function onClickLifeSpan(){
    const products = createProductsOfClassProducts()
    setTimeout(()=> {
        const productsListItem = lifeSpanProducts(products);
        insertListItems( productsListItem );
}, 5000)
}
