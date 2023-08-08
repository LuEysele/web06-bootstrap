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


/* 
-------------- Funciones flecha ------------
            ( arrow Function )
Funciones similares a las funciones exppresadas pero:
- No requiere la palabra reservada function
- Si tiene una sola intrucción, no requiere las llaves {}
- Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parámetros) => instrucción;
    
    const nombreVariable = (parámetros) => {
        insttrucción;
        return expresión;
    }
*/

/* const areaRectangulo = function (base, altura){
    return base * altura;
}
 */
const areaRectangulo = (base, altura) => base * altura;
console.log(`El área es: ${areaRectangulo(3, 9)} m2.`);

/* 
-------------- Parámetros por defecto ------------
                (default parameters)
Inicializa un parámetro de la función si no se envía el argumento cuando se invoca

*/
// funcion flecha que realiza el área de un triángulo
/**
 * Calcula el área de un triángulo
 * @param {number} base 
 * @param {number} altura 
 * @returns {number} base * altura / 2;
 */

const areaTriangulo = (base = 1, altura = 1) => (base * altura)/2.0;

console.log( `El área es: ${areaTriangulo(3, 9)} m2`);
console.log( `El área es: ${areaTriangulo()} m2`); // 0.5
console.log( `El área es: ${areaTriangulo(10)} m2`); // 5
console.log( (1000).toString() ); //conversión de base 10 -> 1000
console.log( (1000).toString(2) ); //conversión de base 10 -> 1111101000
console.log( (1000).toString(16) ); //conversión de base 10 -> 3e8

/* 
-----------------Parámetros rest-------------------------
                (Rest parameters)
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un array.
Rest parameters deben estar al final de la lista de parámetros.

Sintaxis:
     ...nombreParametros

*/
const sumatoriaMultiplesNumeros = (a = 0, b = 0, ...rest) => {
    let suma = a + b;
    // sumar los valores del arreglo "rest"
    for (let i = 0; i < rest.length; i++){
//        suma = suma + rest[i];
        suma += rest[i];
    }

    return suma;
}

console.log(`Sumatoria de múltiples números: ${ sumatoriaMultiplesNumeros(2,5)}`); // 
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2,5, 10, 9, 20, 10)}`); // 7
console.log(`Múltiples números: ${ sumatoriaMultiplesNumeros(2)}`); // NaN cuando no se predefinen a y b, 2 cuando sí se predefinen

/* 
---------------- Funciones de callback -------------------
Es una función que se pasa a otra función (definida, expresada arrow) como argumento.
Se para en el argumento como referencia (sin paréntesis).
*/

function saludoALosPokemones(){
    return "Yo te elijo";
}

function saludoSquirtle(nombre){
    return "Vamo' a calmarno " + nombre;
}

function eligiendoPokebola( saludo, nombre){
    console.log("===============================")
    console.log("Hola, estás en la liga pokemon");
    console.log("Elige a tu mejor pokemon");
    console.log( saludo(nombre) );
}

// eligiendoPokebola(); //saludo is not a function
// eligiendoPokebola( saludoALosPokemones); //saludo is not a function
//eligiendoPokebola( "yo te elijo" ); //
eligiendoPokebola( saludoALosPokemones ); // "yo te elijo"
eligiendoPokebola( saludoSquirtle, "Lu" ); // "vamo a calmarno"
eligiendoPokebola( function(){return "Pika pika chu"} ); //
eligiendoPokebola( function(nombre){return "quiiiii soy " + nombre}, "Cubone" ); // quiiiii soy cubone
eligiendoPokebola( nombre =>  `quiiiii soy ${nombre}`, "Charizard"); // quiiiii soy cubone

eligiendoPokebola( nombre =>  `quiiiii soy ${nombre}`, "Charizard"); // quiiiii soy cubone

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

 student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/

//------------- Resolviendo con ciclos anidados -----------------

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
function cursosEnComun( student1Courses, student2Courses ){
    const commonCourses = []; //guardar los cursos en común
    for (let i = 0; i < student1Courses.length; i++) { //["Math", "English", "Programming", "Biology", "Physics", "Music"];
        for (let j = 0; j < student2Courses.length; j++) {
            console.log(`${student1Courses[i]} === ${student2Courses[j]} : ${student1Courses[i] === student2Courses[j]}`)
            if ( student1Courses[i] === student2Courses[j] ){
                commonCourses.push(student1Courses[i]);
            }
        }        
        
    }
    return `Cursos en comúm: ${commonCourses}`
}
console.log(cursosEnComun( student1Courses, student2Courses ));
