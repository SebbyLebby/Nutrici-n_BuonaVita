// Dando funcionalidad al botón adicionar y previniendo refresh de la página
var botonAdicionar = document.querySelector("#adicionar-paciente"); //Se llama el id del botón en HTML
botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar")
    var paciente = capturarDatosPaciente(form);
    var tabla = document.querySelector("#tabla-pacientes");
    var pacienteTr = construirTr(paciente);

    tabla.appendChild(pacienteTr);
    form.reset();
});

// Obteniendo los valores del formulario
function capturarDatosPaciente(form){

    //Creando clase "paciente"
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }

    return paciente;
}

function construirTr(paciente){
    
    // Creación de registro nuevo (igual de los elementos nuevos)
    var pacienteTr = document.createElement("tr"); // Obteniendo registro (fila) nuevo
    pacienteTr.classList.add("paciente"); // Agregando clase a cada uno de los elementos creados
    
    // Utilizando la función "construirTd" para ahorrar líneas de código
    var nombreTd = construirTd(paciente.nombre, "info-nombre"); // Elementos que estarán en ese registro
    var pesoTd = construirTd(paciente.peso, "info-peso");
    var alturaTd = construirTd(paciente.altura, "info-altura");
    var gorduraTd = construirTd(paciente.gordura, "info-gordura");
    var imcTd = construirTd(paciente.imcTd, "info-imc");

    // Cargar los valores en las etiquetas creadas
    nombreTd.textContent = paciente.nombre; //Agarramos los 4 valores de la clase paciente (nombre, altura, peso, gordura)
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    // Relacionando valores de los elementos con appendChild hacia el HTML
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    console.log(pacienteTr);

    return pacienteTr;

}

// Construcción de elementos Td
function construirTd(dato,clase){

    var td = document.createElement("td"); // Generando "td"
    td.classList.add(clase); // Dando nombre de la clase
    td.textContent = dato;

    return td;
}