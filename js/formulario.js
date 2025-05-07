function guardar() {
validar();
}

function validar() {
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let fnacimiento = document.getElementById("id_fnacimiento").value;
    let email = document.getElementById("id_email").value;
    let password = document.getElementById("id_password").value;

    if(nombre===""){
        console.log("ERROR!, no ha ingresado el nombre");
    }else{
        console.log("Paso valicación del nombre");
    }

    if(apellido===""){
        console.log("ERROR!, no ha ingresado el apellido");
    }else{
        console.log("Paso valicación del apellido");
    }

    if(fnacimiento===""){
        console.log("ERROR!, no ha ingresado la fecha de nacimiento");
    }else{
        console.log("Paso valicación de la fecha de nacimiento");
    }

    if(email===""){
        console.log("ERROR!, no ha ingresado el email");
    }else{
        console.log("Paso valicación del email");
    }

    if(password===""){
        console.log("ERROR!, no ha ingresado la contraseña");
    }else{
        console.log("Paso valicación de la contraseña");
    }
}