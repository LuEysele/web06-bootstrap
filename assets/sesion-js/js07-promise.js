/* console.log("Sesión JS07 - Promise"); */
/* 
 La promesa es un patrón asincrónico que se utiliza
 para manejar operaciones asíncronas.

 Las promesas permiten realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.

 Las promesas tienen tres estados:
 
 1.- Pending: el estado inicial de una promesa antes de que se resuelva o se rechace.
 2.- Resolved: la promesa se resuelve con un valor.
 3.- Rejected: la promesa se rechaza con una razón.

 Resolve o reject son funciones de callback.
 Para creas una promesa se usa el constructor de la clase promise.

 sintaxis:
    const pinkyPromise = new Promise ( fncCallBack );

*/

//const pinkyPromise = new Promise ( ()=>{} );
//const pinkyPromise = new Promise((fncCallBackResolve, fncCallBackReject)=>{})
/* const pinkyPromise = new Promise((fncCallBackResolve, fncCallBackReject)=>{
    const menorEdad = false;

    if( menorEdad )
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject({code : 404, message : "Ni te topo"});
} );

// Consumir las promesas
// Se usa los métodos de catch y finally*

console.log("------> Promesas <------");
console.log("Antes de consumir la promesa");

//pinkyPromise(); // Esto nos da un error "is not a function"
//pinkyPromise.then().catch().finally();
pinkyPromise
    .then( (response)=> console.log(`Promesa resuelta: ${response}`) ) // Se ejecuta una función de callback si la promesa fue resuelta
    .catch( (error)=> console.log(`Promesa rechazada: ${error.message}`)) // se ejecuta una función de callback si la promesa fue rechazada
    .finally( ()=> console.log("Se ha terminado de resolver la promesa") ); // se ejecuta una función de callback 
                //después de que la promesa fue resuelta o rechazada

console.log("Después de consumir la promesa"); */

// haciendo una promesa con parámetros
/**
 * Saludo especial para las personas que su nombre comience con A.
 * El saludo se genera después de 5 segundos.
 * @param {string} name 
 */
/* const gretting = (name) =>{
    //const myPromise = new Promise(()=>{})
    const myPromise = new Promise((resolve, reject)=>{
        const firstChar = name.charAt(0).toLowerCase()
        if ( firstChar === 'a' )
            //resolve({code : 200, message: `Soy ${name}, ¡hola a todos!`});
            setTimeout(()=>resolve({code : 200, message: `Soy ${name}, ¡hola a todos!`}), 5000)
        else if(firstChar === 'l')
            resolve({code : 201, message: `Soy ${name}, 
                        ¡Saludos a toda la banda de la ch30 
                        taka taka taka taka taka 
                        viene viene viene viene 
                        taka taka taka taka
            `});
        else
            reject({code :404, message: `No estoy disponible para ${name}`})
    }) ;
     return myPromise;
} */

/* gretting("Ana")
    .then((response)=> console.log(response.code, response.message))
    .catch((error) => console.log(error.code, error.message));
gretting("Luisa")
    .then((response)=> console.log(response.code, response.message))
    .catch((error) => console.log(error.code, error.message));
gretting("Eduardo")
    .then((response)=> console.log(response.code, response.message))
    .catch((error) => console.log(error.code, error.message));
 */
//------------- consumir las promesos son aync y await -----------------------
/* 
 Async y await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a como se escribiría
 código síncrono.

*/

/* async function grettingCh30 (name) {
    console.log("--------Saludos a la bandita de la CH30 ---------");
    const result = await gretting(name);
    console.log( result );
    console.log("----- Fin del saludo ------");
}
// gretting = async () ={}


const grettingAll = async () =>{
    try{
        await grettingCh30("Anneth");
        await grettingCh30("Mau");
        await grettingCh30("Leonardo");
    }
    catch( error ){
        console.warn("Se rechazó una promesa");
        console.table( error);
    }
    
}

grettingAll(); */