console.log("Bienvenido a la sesión JS01");

// 7 datos primitivos
// numbers, string, boolean, null, undefined, bigint, symbol

// Tipos de datos
//Primitivos y no primitivos

// No primitivos:
// Object

// Tipo de dato string
const stringData = "Holi crayoli";
console.log(stringData);

// tipo de dato number
// números positivos, negativos, decimales
console.log( `Tipos de datos number: 
${12}, ${-6}, ${0.456}, ${5*"hola"}, ${45/0}, ${-45/0}` );
console.log("-- \n \"Texto entre comillas dobles\" --");
console.log('-- \n "Texto entre comillas dobles " --');

console.log(`Valor máximo representable en JavaScript : ${Number.MAX_VALUE}`);
console.log(`Si el valor es mayor a MAX_VALUE como 1.79e310: ${1.79e310}`); //Infinity

console.log(`Valor máximo seguro en JavaScript: ${Number.MAX_SAFE_INTEGER}`) 
// Cuando se realizan operaciones que exceden los límites de MAX_SAFE_INTEGER
//Se produce una pérdida de precisión.
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1}`); //9007199254740992
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 2}`); //9007199254740992 (incorrecto)
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 3}`); //9007199254740994
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 4}`); //9007199254740996 (incorrecto)

//tipos de datos BigInt
//Sirven para representar valores númericos enteros, de los que el tipo number 
//no puede representar o no es seguro

console.log("Operaciones con BigInt")
const myBigInt = 9007199254740991n;
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 1n}`); //9007199254740992
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 2n}`); //9007199254740992 (incorrecto)
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 3n}`); //9007199254740994
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 4n}`); //9007199254740996 (incorrecto)

//tipo de dato boolean
// se tiene dos estados: true o false
console.log(`Tipo de dato verdadero: ${true}`);
console.log(`Tipo de dato falso: ${false}`);

// tipo de dato undefined
// una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log(`Tipo de dato undefined: ${myVar}`);

// tipo de dato nul
// una variable que intencionalmente se borra el tipo de dato
let myVarNull; // undefined
console.log(`tipo de datos myVarNul ${typeof myVarNull}`);
myVarNull = "No me gusta YLE";
console.log(`tipo de datos myVarNul ${typeof myVarNull}`);




