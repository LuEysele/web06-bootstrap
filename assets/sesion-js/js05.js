console.log("Sesión JS05 Condiciones y expresiones");

//------------- Operadores aritméticos --------------
/* adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial ** - Math.pow(2, 3) 2**3

*/

// --------- Precedencia de operadores ------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const operaciones = 5 * 2 + 3 ** 2 - 4;
console.log( operaciones );
console.log( 4 % 3 + 2 * 3 / 2 - 1);

//----------- Operadores de asignación -------------
/* 
 Asigna un valor a su operador izquierdo basándose en el valor
 de su operando derecho:

 asignación =

 Operadores abreviados ( compuestos ):
  op1 += op 2 -> op1 = op1 + op2
  op1 -= op 2 -> op1 = op1 - op2
  op1 *= op 2 -> op1 = op1 * op2

*/
let asignacion = 3;
console.log( asignacion += 3 * 3 ** 3 + 10) // 94
console.log( asignacion += 3 * (3 ** 3) + 10) // 94 + 91 = 185
console.log( 2 ** 3 ** 2 ); // 512

// ---------------- Operadores unarios -----------------
// Solo actúan sobre un operando
// Negación
let numero = 3;
let dinero = - numero; //-3

// Conversión numérica
let pago = + dinero; // -3
let intereses = + "5.23"; // 5.23 numérico
console.log( typeof(intereses) ); // number
intereses = 3;
console.log( intereses += 5 + + "3");

// Operador lógico NOT
let isActive = !true; // false

// Operador de incremento y decremento en unidad
/* 
 Operador de pre-incremento y pre-decremento
    ++ valor
    -- valor

 Operador de post-incremento y post-decremento
    valor ++
    valor --

*/

let number = 10;
++ number;
console.log( number ); // 11
number ++;
console.log( number ); // 12

number = 20;
console.log( ++ number ); // 21
console.log( number ++ ); // 21
console.log( number ); // 22

let index = 0;
for (    ; index < 5; index++ ) {
    console.log(index);
}
console.log( "valor index: " + index ); // 5

let a = 0; b = 0;
for ( ; a < 3; b = a++) {
    console.log( a, b);
}
console.log( a, b);

let x = 3;
let y = ++x;
console.log(`x : ${x++} y: ${++y}`); // 3, 5
console.log(`x : ${x} y: ${y}`); // 4, 5


// ----------- Operadores lógicos && y || ----------
/* 
 También son conocidos como operadores de corto circuito ( short-circuit operators).
 
 &&  : la evaluación se detiene tan pronto como se encuentra un operador falso.
       Ya no se evalúa el segundo operando y se retorna la expresión de OP1
 OP1 && OP2 Si OP1 es verdadero se realiza la expresión de OP2

 OP1 || OP2 : Si OP1 es verdadero se realiza la expresión de OP1.

*/
const va = true , vb = false , vc = true;
const n1 = n2 = n3 = true;
console.log( va || vb && vc); // true

// Conversión a booleano
// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined, NaN

console.log( va && "Holi Crayoli"); // Holi Crayoli
console.log( vb && "Holi Crayoli"); // false
console.log( NaN && "Holi Crayoli"); // NaN
console.log( "false" && "Holi Crayoli"); // Holi Crayoli
console.log( "" && "Activado"); // ""

console.log( "Activado" && ""); // ""
console.log( "activado" || papasFritas ); // arroja un valor vacío porque no está definido

const person = {
    name : "Leo",
    lastname : "Ronaldo",
    age : 25
};

console.log( `nombre: ${person.name}`);
console.log( `nombre: ${person["name"]}`);

const occupation = person.occupation || "Software Engineer";

console.log(`Ocupación: ${occupation}`);

//------------ Comparación estricta -----------------
/* 
 === Estrictamente igual, se debe comparar el valor y el tipo de dato
 !== Estrictamente diferente, debe ser diferente en valor y tipo

*/

console.log( "23" === 23); // false
console.log( "true" === true ); // false
console.log( "true" == true ); // false NaN == 1
console.log( "45" !== 45); //  true

//---------- Operador de desestructuración (desturcturing) -----------
/* 
 Es una expresión en JS que hace posible extraer datos de arreglos u objetos y nos ayuda a realizar asignaciones más complejas.

*/

let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA}, b: ${dataB}`); // 10, 20
//Intercambiar los datos -> A: 20 y B: 10
//[dataA, dataB] = [dataB, dataA];

/* let temp = dataA;
dataA = dataB
dataB = temp; */

[ dataA, dataB ] = [ dataB, dataA ];
console.log(`a: ${dataA}, b: ${dataB}`) // 10, 20

const car = {
    model : "vento",
    year: 2023,
    brand : "VW",
    color : "red",
    price : 320_000,
    additionalInfo : {
        bluetooth : true,
        cruiseControl : true,
        gps : false,
    }
}

// console.log(`Modelo : ${ car.model }`); // Vento
// console.log(`Año : ${ car.year}`); // 2023
/* const carModel = car.model;
const carYear = car.year;
console.log(`Modelo : ${ carModel }`); // Vento
console.log(`Año : ${ carYear}`); // 2023 */

const { year, model : carModel, additionalInfo : {bluetooth} } = car;
console.log(`Modelo: ${ carModel }, Año: ${ year }`) // Vento, 2023
console.log(`Tiene bluetooth: ${ bluetooth ? "sí" : "no"}`) // Vento, 2023


//------------- ejercicio --------------------
/* 
  Hacer una función que realice la división de 2 números
  y entregue (return) en entero el cociente y residuo
  
  Llamar a la función y mostrar en la consola el resultado

*/
const num1 = 5;
const num2 = 2;

function divEntero(num1, num2) {
    let division = parseInt(num1 / num2);
    let residuo = num1 % num2;
    return {division, residuo};
}

console.log(`División ${divEntero(num1,num2).division}, residuo: ${divEntero(num1,num2).residuo}`);