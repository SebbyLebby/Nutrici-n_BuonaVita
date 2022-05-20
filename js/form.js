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

    // Relacionando valores de los elementos con appendChild hacia el HTML
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre")); // Utilizando la función "construirTd" para ahorrar líneas de código
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

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