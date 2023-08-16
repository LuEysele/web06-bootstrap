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

const urlFakeStore = "https://fakestoreapi.com/products";

const getProducts = ( url ) => {

    fetch( url )
        .then((resolve)=> console.log( resolve ))
        .catch((error)=> console.warn( error ));
};

getProducts( urlFakeStore )