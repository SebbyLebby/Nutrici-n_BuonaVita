/* INTRODUCCIÓN
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Buena Vida Nutrición";
console.log("Estoy imprimiendo de una fuente externa que es principal.js");
*/

// CALCULANDO IMC
var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);

tdIMC.textContent = imc;



console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);
console.log(imc);