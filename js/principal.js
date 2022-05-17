/* INTRODUCCIÓN
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Buena Vida Nutrición";
console.log("Estoy imprimiendo de una fuente externa que es principal.js");
*/

// OBTENIENDO DATOS PARA CALCULAR IMC
var paciente = document.querySelector("#primer-paciente");

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
}

if(altura < 0  || altura >= 3.0){
    console.log("Altura incorrecta")
    tdIMC.textContent = "Altura incorrecta";
    alturaValida = false;
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc;
}