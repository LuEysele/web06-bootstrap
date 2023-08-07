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
console.log(`tipo de datos myVarNul ${typeof myVarNull}`); //undefined
myVarNull = "No me gusta YLE";
console.log(`tipo de datos myVarNul ${typeof myVarNull}`); // string
myVarNull = null;
console.log(`tipo de datos myVarNul ${typeof myVarNull}`); // object
console.log(`myVarNul es null ${myVarNull === null}`); // object

// tipo de dato symbol
// representa un valor único que se puede utilizar ocmo clave en objetos o identificador único
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log( `mySymbol === mySymbol2 ${mySymbol === mySymbol2}`);

const myObj = {
    clave : "valor",
    [mySymbol] : 16, // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    myKey : 123,
    [myKey] : 567,
}
console.log(myObj);

//-------------Objetos en JavaScript
// tipo de dato Array
const cancionesCh30 = ["Highway Star", "Trouble", "Saoko", "Rock DJ"];

// tipos de datos Object
const misDatosDePerfil = {
    name : "Sergio",
    lastname : "Torres",
    age: 39,
    isBelicoso: false,
    fullName : function(){
        return `Nombre completo de Sergh: ${this.name} ${this.lastname}`;
    },
    // agregar una función que muestre el nombre completo en mayúsculas
    fullNameUp : function(){
        return this.fullName().toUpperCase();
    }
}

console.log(misDatosDePerfil);
console.table(misDatosDePerfil);
console.log( misDatosDePerfil.fullName ); // imprime la función xd
console.log( misDatosDePerfil.fullName() ); //Sergio Torres
console.log( misDatosDePerfil.fullNameUp() ); //SERGIO TORRES


// --------------------------------------------
//Conversión explícita de datos
const horaDescanso = 13.05;
console.log ( "Hora Descanso: " + horaDescanso + "h."); // concatenación
const horaDescansoTxt = String( horaDescanso);
console.log ( "Hora Descanso: " + horaDescansoTxt + "h."); // concatenación
console.log("Hora de retorno: "+ horaDescanso + .15); //13.050.15

const colorVerde = 0x008000;
console.log(`El valor RGB del color verde es:  ${colorVerde}`); // 32768
console.log(`El valor RGB del color verde es:  ${colorVerde.toString()}`); // 32768
console.log(`El valor RGB del color verde es:  ${colorVerde.toString(16)}`); // 8000, aquí se le indica la base a la cual queremos que nos lo represente
console.log(`El valor RGB del color verde es:  ${colorVerde.toString(16).padStart(6, "0")}`); // 008000

//Conversión a Number
const myAgeTxt = "25";
const sumatoria = 10 + myAgeTxt;
console.log(`Valor de la sumatoria ${sumatoria}`); //1025

console.log(`Valor de la sumatoria ${10 + Number(myAgeTxt)}`); //35
console.log(`Valor de la sumatoria ${10 + parseInt(myAgeTxt)}`); //35
console.log(`Valor de la sumatoria ${10 + parseFloat(myAgeTxt)}`); //35
console.log(`Valor de la sumatoria ${10 + (+myAgeTxt)}`); //35

//Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales
// - parseInt convierte solo la parte entera
console.log(parseInt(100.567)); //100
// - Number devuelve Nan si la cadena contiene algún carácter no numérico
// - parseInt convierte los enteros hasta encontrar un carácter no numérico
// -          si la entrada no comienza con un valor numérico, devuelve NaN
console.log( Number("123 - 456")); // NaN
console.log( parseInt("123 - 456")); // 123
console.log( parseInt("$123 - 456")); // NaN
console.log( "parseInt( '$123 - 456'.slice(1) ): " +  parseInt( "$123 - 456".slice(1) ) ); // 123
console.log( Number(true)); // 1
console.log( parseInt( true)); // NaN

// Conversión a booleano
// En la conversión de boolean los sigiuentes valores son falsos:
// false, 0, "", null, undefined
console.log( "Boolean(1): " + Boolean(1)); // true:
console.log( "Boolean(1000): " + Boolean(1000)); // true:
console.log( "Boolean('Hola'): " + Boolean("hola")); // true:
console.log( "Boolean('false'): " + Boolean("false")); // true:
console.log( "Boolean(' '): " + Boolean(" ")); // true

//Number
//[] -> 0, [30] -> 30, [20, 30] -> NaN, false -> 0, true -> 1
//String
// [] -> "" , [12,2] -> "12,2", function(){} -> "funtion(){}", {} -> [object, object]

console.log ( String( JSON.stringify({name:"sergio"}) ));