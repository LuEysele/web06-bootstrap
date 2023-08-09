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

const temperatura = 23;
let mensaje = "Temperatura de: ";

if (temperatura === 22){
    mensaje += `${temperatura} °C, es ideal`;
}
else if (temperatura >= 15 && temperatura <= 21){
    mensaje += `${temperatura} °C, es fría` ;
}
// rango de 23 a 30 -> es calurosa
else if (temperatura >= 23 && temperatura <= 30){
    mensaje += `${temperatura} °C, es calurosa` ;
}
else {
    mensaje = `La temperatura de ${temperatura} °C, no es ideal`
}

console.log(mensaje);

//------- Condicional switch -------------
/* 
 La condicional Switch evalúa una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar la
 sentencia 'break' o se finalicen todas las sentencias de
 la condicional switch
 
 Sintaxis:
    switch (expresion) {
        case valor 1:
            sentencia;
            break;
        case valor 2;
            sentencia;
            break;
        case valor n;
            sentencia;
            break;
        default:
            sentencias;
            break;
    }

*/

/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida del ventilador
 */
const setVelocidadVentilador = ( velocidad = 0 ) => {
    let mensaje;
    // la condicional switch utiliza la comparación estricta ( === )
    switch( velocidad ){
        case 0:
            mensaje = "apagado"; break;
        case 1:
            mensaje = "velocidad baja"; break;
        case 2:
            mensaje = "velocidad media"; break;
        case "2":
            mensaje = "velocidad media"; break;
        default:
            mensaje = "el nivel no existe"; break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(2)}`); // media
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador("2")}`); // media
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador()}`); // apagado
