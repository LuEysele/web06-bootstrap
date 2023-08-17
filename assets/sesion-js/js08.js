console.log("Sesión JS08 - POO");

const registerForm = document.forms["registerForm"];

registerForm.addEventListener( "submit", ( event )=>{
    event.preventDefault(); 

    const user = {
        fullname: registerForm.elements["fullname"].value, 
        email : registerForm.elements["email"].value, 
        password : registerForm.elements["password"].value,        
    }
    console.table(user);
    postUser(user);
    // convirtiendo el objeto a formato JSON
    localStorage.setItem("user", JSON.stringify(user));
}  );

const postUser = async ( userData) =>{
    const url = "https://regres.in/api/register";

    const response = await fetch( url, {} )
    method: "POST", // POST, PUT, DELETE, GET
    body: JSON.stringify(userData), //datos del usuario
}