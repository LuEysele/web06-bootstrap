console.log("Sesión JS02 Uso de funciones");

/* 
Función: un conjunto de instrucciones que realiza una tarea o calcula un valor
        códifo que se puede reutilizar
-----------------Funciones declaradas----------
    (function declaration, function statement)
Una caracterísitca de las funciones declaradas es que tienen hoisting

sintaxis;
    function nombreFuncionCamelCase(parámetros){
        //cuerpo de la función
        instrucciones;
    }

hoisting: es un comportamiento en JS que permite a la declaración de variables
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

    */

console.log(multiplica(4,3));

function multiplica(a, b){
    return a * b ;
}

/* 
-------------- Funciones expresadas ------------
                (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre )
Las funciones expresadas no tienen hoisting, porque no se carga en
memoria hasta que se utilicen.

Sintaxis:
    const nombreVariable = function (parámetros) {
        instrucciones;
    };

*/

const sum =  function sumatoria(a , b){
    return a + b;
}
console.log(`El resultado de 4 + 2 es: ${ sum(4, 2)}`)

let saludo; // undefined
const localidad = "tlaxcala";

if ( localidad == "buenos aires"){
    saludo = function(name){ return `Holis ${name}`};
}
else {
    saludo = function(name){return `Buenos días ${name}`}
}
console.log( saludo("Sergio"));
console.log( saludo("David"));

/* 
-------------- Funciones autoinvocadas ------------
            ( Immediately Invoked Function Expression )
Funciones que se autoinvocan, se pueden definir con funciones anónimas

sintaxis:
    (function ( parámetros ){})(argumentos);

*/
( function( name ){
    console.log(`Me llamo ${name} y me autoinvoco`);
})("ChatGPT");


