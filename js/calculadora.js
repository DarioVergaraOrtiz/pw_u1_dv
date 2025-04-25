const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '+';

function sumar(numero1, numero2){
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function dividir(numero1, numero2){
    return numero1 / numero2;
}

function evaluarOperacion(tipo){
    
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    if(tipo===SUMA){
        resultado=sumar(num1,num2);
    }
    if(tipo===RESTA){
        resultado=restar(num1,num2);
    }
    if(tipo===MULTIPLICACION){
        resultado=multiplicar(num1,num2);
    }
    if(tipo===DIVISION){
        resultado=dividir(num1,num2);
    }

    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString;

}

const fundamentos = (num1, num2) =>{
    console.log('Fundamentos JS')

        /*Tipos de variables
    var: antiguo, obsoleto
    let; variables cambiantes
    const: para variables constantes
    */

    let nombre='Dario';
    let numero=10;
    let arreglo=[1,2,3,4,5];

    const nombrec='10'
    console.log(arreglo);
    console.log('texto de prueba');

    /*Arreglos*/
    const diasLaborables = ['lunes','martes','miercoles','jueves','viernes'];
    console.log(diasLaborables);
    console.log(diasLaborables[0]);
    console.log(diasLaborables[10]);
    let valor='';
    console.log(valor);

    diasLaborables.push('sabado');
    diasLaborables.unshift('Dias');
    console.log(diasLaborables);

    const numerosImpares = [1,3,5,7,9];
    const numerosPares = [2,4,6,8,10];

    const numeros = numerosImpares.concat(numerosPares);

    console.log(numeros);

    /*Sentencias de control*/
    for(const dia of diasLaborables){
        if(dia==='viernes'){
            console.log('Por fin viernes');
        } else{
            console.log('Aun no es viernes')
        }
    }

    for(const dia of diasLaborables){
        if(dia!=='viernes'){
            console.log('Dia Normal');
        } else{
            console.log('Dia de salida')
        }
    }

    /* Manejo de objetos */
    const miProfesor={
        nombre: 'Dario',
        apellido: 'Vergara',
        edad: '24',
        genero: 'Masculino',
        ciudad: 'Quito'

    }
    console.log(miProfesor);

    /* Seteo de atributos */
    console.log(miProfesor.nombre);
    miProfesor.apellido='Ortiz';
    console.log(miProfesor);

    if(miProfesor.ciudad === 'Quito'){
        console.log('Es de la capital');
    }

    const estudiante1={
        nombre: 'Dario',
        apellido: 'Vergara',
        edad: '24',
    }
    
    const estudiante2={
        nombre: 'Gabriela',
        apellido: 'Rodriguez',
        edad: '25',
    }
    const estudiante3={
        nombre: 'Steven',
        apellido: 'Quinatoa',
        edad: '23',
    }

    const arregloEstudiantes = [estudiante1,estudiante2,estudiante3];
    console.log(arregloEstudiantes);
    console.table(arregloEstudiantes);
}