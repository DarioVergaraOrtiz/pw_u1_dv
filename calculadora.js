const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    return numero1 / numero2;
}
 
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
 
    let resultado = 0;
 
    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === DIVISION) {
        resultado = dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();
 
}
 
const fundamentos = () => {
    console.log('Fundamentos JS');
    let nombre = '10';
    let numero = 10;
    let areglo = [1, 2, 3, 4, 5];
 
    const nombrec = '10';
    console.log(areglo);
    console.log('Texto de prueba');

    const diasLaborables = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasLaborables);
    console.log(diasLaborables[0]);
 
    console.log(diasLaborables[10]);
    let valor = '';
    console.log(valor);

    diasLaborables.push('Sabado');

    diasLaborables.unshift('Dias: ');
    console.log(diasLaborables);
 
    const numerosImpares = [1, 3, 6, 7, 9];
    const numerosPares = [2, 4, 6, 8];
    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);
 
  
    for (const dia of diasLaborables) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Por fin viernes');
 
        } else {
            console.log('Aun no es viernes')
        }
 
        if (dia !== 'Viernes') {
            console.log('Dia normal');
 
        } else {
            console.log('Dia de salida')
        }
    }
  
    const miProfesor = {
        Nombre: 'Gabriela',
        Apellido: 'Rodriguez',
        Edad: 25,
        Genero: 'Femenino',
        Ciudad: 'Quito'
    }
    console.log(miProfesor);
    console.log(miProfesor.Nombre);
 
    /*Seteo de atributos*/
    miProfesor.Apellido = 'Contreras';
    console.log(miProfesor);
    if (miProfesor.Ciudad === 'Quito') {
        console.log('Es de la Capital');
    }
    const estudiante1 = {
        Nombre: 'Juan',
        Apellido: 'Perez',
        Edad: 25,
        Genero: 'Masculino',
        Ciudad: 'Loja'
    }
    const estudiante2 = {
        Nombre: 'Lupita',
        Apellido: 'Torres',
        Edad: 25,
        Genero: 'Femenino',
        Ciudad: 'Quito'
    }
    const estudiante3 = {
        Nombre: 'Sebastian',
        Apellido: 'Cruz',
        Edad: 25,
        Genero: 'MAsculino',
        Ciudad: 'Quito'
    }
    const estudiantes = [estudiante1, estudiante2, estudiante3];
 
    console.log(estudiantes);
    console.table(estudiantes);
 

    const ciudadano = {
        nombre: 'Gabriela',
        apellido: 'Rodriguez',
        direccion: {
            callePrincipal: 'Av. America',
            calleSecundaria: 'Av. La Gasca',
            numeracion: '5620',
            barrio: {
                referencia: 'Frente al dilipa'
            }
        }
    }
    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    ciudadano.direccion.callePrincipal = 'Av. Amazonas';
    console.log(ciudadano.direccion.callePrincipal);
 
    const est1 = {
        nombre: 'Dario'
    }
 
    const est2 = {
        nombre: 'Calixto'
    }

    est1.nombre = 'Kevin';
 
    const arregloEstudiantes = [est1, est2];
    console.log(arregloEstudiantes);
 

    const arregloEstudiantes2 = [{ nombre: 'Carmela', apellido: 'Castillo' }, { nombre: 'Viviana', apellido: 'Mejia' }];
    console.log(arregloEstudiantes2);

    console.log(arregloEstudiantes2[1].apellido);
 

    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c5);
 
    const [cuno, cdos] = colores;
    console.log(cuno);
    console.log(cdos);
 
    const [, , ctres] = colores;
    console.log(ctres);

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    console.log(c01);
    console.log(c02);
 
    desestructuracionArreglo(colores);
 
    const [,p2,p3,p4,p5,p6,p7,p8,p9,p10] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p3);
    console.log(p10);

    console.log('desestructuracion por operador rest');
    const [p1,...resto]=desestructuracionArreglo2();
    console.log(p1);
    console.log(resto);


    const auto = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'Amarillo'
    }

    const{marca,color,anio} =  'auto';
    console.log(color);

    const {anio1} = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'Amarillo'
    }

    console.log(anio1)
    
    desestructuracionObjeto(auto);

    const universidad = {
        nombreU:'UCE',
        direcccion:'América',
        rector:{
            nombre:'Dario',
            apellido:'Vergara'
        }

    }

    const {rector,nombreU} = universidad;
    console.log(rector);
    const {apellido} = rector; 
    console.log(apellido);


    
const autoR = {
    marcaR: 'Toyota',
    modeloR: 'prius',
    anioR: 2020,
    colorR: 'Amarillo'
}

const {marcaR, ...restoo}=autoR;
console.log(marcaR);
console.log(restoo);

    
}




const{nombre2, rector2:{nombreR2}} = universidad2;
console.log(nombreR2);

function desestructuracionArreglo([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);
}

function desestructuracionArreglo2() {
    const colores= ['Rosado', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    return colores;
} 

function desestructuracionObjeto(objeto){
    console.log(objeto);
}

function desestructuracionObjeto({marca, color}){
    console.log(marca);
    console.log(color);
}



