// Dando funcionalidad al botón adicionar y previniendo refresh de la página
var botonAdicionar = document.querySelector("#adicionar-paciente"); //Se llama el id del botón en HTML
botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar")

    // Obteniendo los valores de los inputs
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tabla = document.querySelector("#tabla-pacientes")

    // Creación de registro nuevo
    pacienteTr = document.createElement("tr"); //Obteniendo registro (fila) nuevo
    nombreTd = document.createElement("td"); // Elementos que estarán en ese registro
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    // Cargar los valores en las etiquetas creadas
    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    // Relacionando valores con appendChild hacia el HTML
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);

});