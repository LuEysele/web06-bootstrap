console.log("Página en construcción con Link");

function clickPatricio() {
    alert("¿La mayonesa es un instrumento?");
}

function changeColor (elementHtml, color) {
   // alert("¡Qué emoción! Voy a cambiar mi color")
   console.log(elementHtml);
   console.log(color);
   elementHtml.style.color = color;

}

function changeColorWithPrompt(elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    changeColor( elementHtml, color );
    elementHtml.innerHTML = "<h3>Ahora soy <em>" + color  + "</em> </h3>"
}

function changeTextOfUserColor( element, color ){
    element.innerHTML = "<h3>Ahora soy <em> " + color + "</em> </h3>"
}

function resetColor() {
    const refRedColor = document.getElementById("red-color");
    const refGreenColor = document.getElementById("green-color");
    const refPurpleColor = document.getElementById("purple-color");
    const refuserColor = document.getElementById("user-color");

    changeColor(refGreenColor, 'black');
    changeColor(refPurpleColor, 'black');
    changeColor(refRedColor, 'black');
    changeColor(refuserColor, 'black');
    changeTextOfUserColor( refuserColor, 'black');
}

function insertName(){
    const name = prompt("Inserta tu nombre");
    document.getElementById("nombreIn").innerHTML ="<h3>¡Hola, " + name + "!</h3>";


}

