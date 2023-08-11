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
