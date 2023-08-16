console.log("JS07 - API Fetch");

/* 
 API: Application Programming Interface
      Permite la comunicación entre dos aplicaciones de software
      a través de un conjunto de reglas

 La API Fetch nos ayuda a acceder y manipular
 peticiones HTTP (DELETE, GET, POST, PUT).

 Sintaxis:
    fetch(resource, options)

*/

/* const urlFakeStore = "https://fakestoreapi.com/products";

const getProducts =  ( url )=>{

    fetch( url )
        .then( ( resolve )=> {
            console.log( resolve);
            return resolve.json(); // conversión de JSON a Object
        })
        .then( ( resolveJson )=> {
            console.log(resolveJson)
            printToDOM( resolveJson);

        })
        .catch( (error)=> console.warn( error ) );
}; */

const getProducts = async ( url ) =>
 try{
    const resolve = await fetch(url);
    const resolveJson = await resolve.json();
    printToDOM( resolveJson );
 }
 catch( error ){
    console.warn( error );
 };



getProducts( urlFakeStore );

function printToDOM( products ){
    let unorderList = "";
    for ( const product of products) {
        unorderList += `<li class="col-6 col-md-4">${product.title}</li>`
    }

    const productsList = document.getElementById("products");
    productsList.innerHTML = unorderList;
}

/* 
JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos. 
Algunas de sus características incluyen:

-Es un formato de texto plano y fácil de leer.
-Utiliza una estructura de pares clave-valor para representar datos.
-Utiliza comillas dobles para encerrar las claves y los valores.
-Utiliza comas para separar los pares clave-valor.
-Utiliza corchetes para representar arreglos.
-Utiliza llaves para representar objetos.
-Utiliza valores booleanos, números, cadenas, arreglos y objetos 
para representar datos.
-Es independiente del lenguaje, ya que se puede utilizar en 
una variedad de lenguajes de programación.
-Es ampliamente utilizado en aplicaciones web y móviles para transmitir 
y recibir datos de un servidor.
-Es un estándar abierto y no tiene restricciones de uso ni de licencia.

Es importante mencionar que JSON es un subconjunto de JavaScript y por lo tanto, 
es una forma de representar objetos y arreglos en JavaScript, 
pero no es lo mismo que JavaScript. 
JSON solo puede representar un subconjunto de los valores que 
se pueden representar en JavaScript.
*/