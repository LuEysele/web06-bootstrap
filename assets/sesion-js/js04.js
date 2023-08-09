console.log("Sesión JS04 matrices y bucles");


// Declaramos un arreglo de 2 dimensiones (matriz).
// Arrays anidados
// [ [] , [] , [] ]

const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth" , "Maryluz"] , /* ByteMe */
    [ "Ed"  , "Jimena", "Marifer", "Leo"    , "Alejandro"    ] ,  /* PerryCode */
    [ "Lu"  , "Leo"   , "Daniel" , "Gina"   ]  /* BugBusters */
];

console.log(`Integrantes de BugBusters: ${personasEnCh30[2]}`); // Lu, Leo, Daniel, Gina
console.log(`Integrantes de BugBusters: ${personasEnCh30[2].join(' ')}`); //  Lu Leo Daniel Gina

console.log(`BugBusters integrante n. 1: ${personasEnCh30[2][0]}`); // Lu

// En la historia, Leo tiene exceso de amonestaciones.
// Hay que reemplazar el nombre de Leo en PerryCode por Bryan.

//personasEnCh30[1][3] = "Brayan";
personasEnCh30[1].splice(3, 1, "Brayan");
console.table( personasEnCh30 );

//--------------- Iterando todos los elementos

for (let equipo = 0; equipo < personasEnCh30.length; /* filas */ equipo++) {
    for (let persona = 0; persona < personasEnCh30.length; persona++) {
        console.log( personasEnCh30[ equipo ][ persona ]);
        
    }
}