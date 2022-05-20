// Dando funcionalidad al botón adicionar y previniendo refresh de la página
var botonAdicionar = document.querySelector("#adicionar-paciente"); //Se llama el id del botón en HTML
botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar")

    var paciente = capturarDatosPaciente(form);

    var tabla = document.querySelector("#tabla-pacientes")

    // Creación de registro nuevo (igual de los elementos nuevos)
    pacienteTr = document.createElement("tr"); //Obteniendo registro (fila) nuevo
    nombreTd = document.createElement("td"); // Elementos que estarán en ese registro
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    // Cargar los valores en las etiquetas creadas
    nombreTd.textContent = paciente.nombre; //Agarramos los 4 valores de la clase paciente (nombre, altura, peso, gordura)
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calcularIMC(peso,altura);

    // Relacionando valores de los elementos con appendChild hacia el HTML
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);

});

// Obteniendo los valores del formulario
function capturarDatosPaciente(form){

    //Creando clase "paciente"
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    return paciente;
}