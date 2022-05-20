/* INTRODUCCIÓN
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Buena Vida Nutrición";
console.log("Estoy imprimiendo de una fuente externa que es principal.js");
*/

/*Creando capturador de Evento con click
var titulo = document.querySelector(".titulo");
titulo.addEventListener("click",mostrarMensaje);

function mostrarMensaje(){
    console.log("usted hizo click en el título");
}*/


// OBTENIENDO DATOS PARA CALCULAR IMC
var pacientes = document.querySelectorAll(".paciente");

// CALCULANDO IMC PARA TODOS LOS PACIENTES

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    // CONDICIONALES PARA CALCULAR IMC
    pesoValido = true;
    alturaValida = true;

    if(peso < 0  || peso >= 1000){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoValido = false;
        paciente.classList.add("paciente-incorrecto"); // Llamando nueva clase en CSS con JS
    }

    if(altura < 0  || altura >= 3.0){
        console.log("Altura incorrecta")
        tdIMC.textContent = "Altura incorrecta";
        alturaValida = false;
        paciente.classList.add("paciente-incorrecto"); // Llamando nueva clase en CSS con JS
    }

    if(pesoValido && alturaValida){
        tdIMC.textContent = calcularIMC(peso,altura);
    }

}

function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

