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
    switch( parseInt(velocidad) ){
        case 0:
            mensaje = "apagado"; break;
        case 1:
            mensaje = "velocidad baja"; break;
        case 2:
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

//console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(prompt("Velocidad", 1))}`); // velocidad baja

//--------------- Estaciones del año ---------------
/* 
 Preguntar por el número de mes (promt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.
 mes 12, 1, 2 = invierno.
 mes 3, 4, 5 = primavera.
 mes 6, 7, 8 = verano.
 mes 9, 10, 11 = otoño.


Realizar una versión con if-else-elseif y otra con switch.

*/
// ----- VERSIÓN IF ---------
function seasonsIf(){
    const number = parseInt(prompt());
    const invierno = number == 1 || number == 2 || number == 12;
    const primavera = number == 3 || number == 4 || number == 5;
    const verano = number == 6 || number == 7 || number == 8;
    const otoño = number == 9 || number == 10 || number == 11;
    if(invierno){
        alert("invierno");
    } else if(primavera){
        alert("primavera");
    } else if(verano){
        alert("verano");
    } else if(otoño){
        alert("otoño")
    }

}

//-------- VERSIÓN SWITCH -----------
function monthOfTheYear() {
    const mes = parseInt(prompt("Ingresa el mes:"));
    switch (mes ){
        case 12:
        case 1:
        case 2:
            alert("invierno"); break;
        case 3:
        case 4:
        case 5:
            alert("primavera"); break;
        case 6:
        case 7:
        case 8:
            alert("verano"); break;
        case 9:
        case 10:
        case 11:
            alert("otoño"); break;
        default:
            alert("el mes indicado no existe"); break;
    }
}
console.log(`El mes indicado es: ${monthOfTheYear(prompt("Ingresa el mes", 1))}`);

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/

const pagoTarjetaDeCredito = true;

let msj;
if (pagoTarjetaDeCredito === true) msj = "Ha realizado el pago de su TC.";
else "No ha realizado el pago de su TC.";

console.log(`El usuario ${msj}`)