console.log("Sesion JS 03 Control de Flujo");
console.log("No olvidaremos el reto a Ed");

// ------------ Declaración de bloque de código --------
/* 
 Sintaxis:
        {

        }
 Las variables declaradas con let y const
 sólo tendrán alcance (scope) dentro del bloque
 o bloques anidados.

 Si la variable en el bloque, tiene el mismo nombre
 que una variable fuera del bloque, se le da prioridad
 a la variable dentro del bloque
 */

// let y const no se pueden redeclarar

var age = "24";

let firstname = "Sergio";
const lastname = "Torres";
var age = "39";

{
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "26";
    const colorFavorito = "azul";
    var comidaFavorita = "pozole";

    console.log(`${firstname} ${lastname}`); // Mau Peniche
    console.log(age); // 26
    console.log(colorFavorito); // azul
    console.log(comidaFavorita); // pozole
    {
        const colorFavorito = "morado";
        console.log(colorFavorito); // morado
        console.log(firstname); // Mau
        {
            console.log(colorFavorito); // morado
            console.log(firstname); // Mau
        }
    }
}

console.log(`${firstname} ${lastname}`); // Sergio Torres
console.log(age); // 26
//console.log(colorFavorito); // nada (no está definido)
console.log(comidaFavorita); // pozole

//----------- Condicional if else ----------------
/* 
 Ejecuta una sentencia si una condición específica es
 evaluado como verdadera.

 sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if ( condición ) sentencia;
    else if ( condicion 2 ) sentencia 2;
         else if (condición 3 ) sentencia;
         else sentencia_si_condición_3_es_falsa;

    if ( condición1 ) sentencia;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
    ...
    else if ( condicionN ) sentencia;
    else condición;

*/

const temperatura = 22;
let mensaje = "Temperatura ideal de: ";

if (temperatura === 22){
    mensaje += `${temperatura} °C`
}
