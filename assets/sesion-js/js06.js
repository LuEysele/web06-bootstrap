console.log("Sesión JS06: Manipulación del DOM");

/* 
 * Modificar un elemento HTML por medio de su ID
*/
const findElementById = () => {
    const title = document.getElementById("title");
    console.log(title);
    console.log(typeof title);
    console.log(title.innerHTML); // Sesión JS06
    //title.innerHTML = `Generation - Sesión JS 06`;
    title.innerHTML = ` <span class="text-primary"> Generation </span> - Sesión JS 06 `;
}

findElementById();

//---------------- Encontrar elementos por etiqueta ----------------------

const changeElementsByName = () =>{
    const unorderList = document.getElementsByTagName("li"); // Colección de elementos
    console.log( unorderList ); // HTML Collection

    for( const listItem of unorderList){
        listItem.innerHTML = `<span class="text-success fs-4"> ${listItem.innerHTML} 👾 </span>`
    }

}

changeElementsByName();

//----------------Uso del selector universal---------------------
// querySelector

const findElementByQuerySelector = () =>{
    //const element = document.querySelector( "#title" ); // Seleccionar por ID
    //const element = document.querySelector( ".text-warning" ); // Seleccionar por tag
    //const element = document.querySelector( "ul" ); // Seleccionar por tag
    const element = document.querySelector( "h1 span" ); // Seleccionar por tag
    console.log( element ); 


}

findElementByQuerySelector();

//-------------- Crear nuevo elemento HTML -----------------
// appendChild

const newElement = () => {
    const newElement = document.createElement("div"); // <p></p>

    newElement.innerHTML = `La CH30 le gusta: 
    <ul>
        <li>El helado</li>
        <li>El chisme</li>
        <li>Los corridos tumbados</li>
        <li>Escuchar a Mau</li>
        <li>Ser mejores amigos de Anneth</li>
    </ul>
    `;

    const descriptionCh30 = document.querySelector("#descriptionCh30");
    descriptionCh30.appendChild( newElement );
}

newElement();

//----------------Cambiar el color del texto-------------
//style color

const changeColor = (color) => {
    const descriptionCh30 = document.getElementById("descriptionCh30");
    descriptionCh30.style.color = color; // cambio de color de fuente
    descriptionCh30.style.border = `thin solid ${color}`
}

changeColor("beige");

//--------------- Propiedades de visualización------------
// display