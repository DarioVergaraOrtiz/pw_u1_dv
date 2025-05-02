let num1 = 0; 
let num2 = 0; 

function mostrarEnDisplay(valor) {
    let elementoDisplay = document.getElementById('id_display');
    elementoDisplay.innerText = elementoDisplay.innerText + valor; 
}


function calcularResultado() {
    let elementoDisplay = document.getElementById('id_display');
    num2 = parseFloat(elementoDisplay.innerText);  

    let resultado = num1 + num2;

    elementoDisplay.innerText = resultado;
}

function suma() {
    let elementoDisplay = document.getElementById('id_display');
    num1 = parseFloat(elementoDisplay.innerText); 
}
