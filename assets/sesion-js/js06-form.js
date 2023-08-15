console.log("JS - 06 Formulario");

// Obtenemos la referencia del formulario
//const registerForm = document.getElementById("registerForm");
const registerForm = document.forms["registerForm"];

//registerForm.addEventListener("click", fnCallback);
registerForm.addEventListener("submit", (event )=>{
    event.preventDefault(); // evitar las acciones por default
    //console.log(event); datos del click
    //const email = registerForm.elements["email"];
    //const birthdate = registerForm.elements["birthdate"];
    console.log(email.value, birthdate.value);
    const user = {
        fullname : registerForm.elements["fullname"].value,
        email : registerForm.elements["email"].value,
        password : registerForm.elements["password"].value,
        birthdate : registerForm.elements["birthdate"].value,
    }

    const age = calculateAge(user);

    if( age.year < 18 ){
        // alert (`Al rato regresas, aún tienes ${age.year} años`);
        appendAlert(`Al rato regresas, aún tienes ${age.year} años`, 'success')
      }
    });


const calculateAge = ({birthdate : birthdateStr}) =>{
    console.log(birthdateStr); // string 1996-11-30

    // Date entre los milisegundos transcurridos desde el 01/01/1970
    const today = new Date(); // Crear un objeto con la fecha en curso
    const birthdate = new Date(birthdateStr); //objeto con la fecha 1996-11-30
    
    const difference = today - birthdate;
    console.log( difference ); // 842810776994 milisegundos de diferencia
    const age = new Date(difference); //Sun Sep 15 1996 12:09:57 GMT-0600 (GMT-06:00)
    console.log( age )
    console.log(`Years: ${age.getFullYear() - 1970} `); //  1996 -1970 = 26
    console.log(`Months: ${age.getMonth() } `); //  
    console.log(`Days: ${age.getDate() } `); // 
    return {
        year: age.getFullYear() - 1970 ,
        month: age.getMonth() ,
        day: age.getDate() ,
    }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
          const appendAlert = (message, type) => {
          const wrapper = document.createElement('div')
          wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            ` <div>${message}</div>`,
            ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
          ].join('')

          alertPlaceholder.append(wrapper)
          }