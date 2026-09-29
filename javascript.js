// ==========================================
// 1. ESTRUCTURA DE DATOS
// ==========================================

let contactos = [];


// ==========================================
// 2. OBTENER ELEMENTOS DEL HTML
// ==========================================

const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");

const buscarInput = document.getElementById("buscar");

const listaContactos = document.getElementById("listaContactos");
const mensajeVacio = document.getElementById("mensajeVacio");

const contadorContactos = document.getElementById("contadorContactos");


// ==========================================
// 3. AGREGAR CONTACTO
// ==========================================

btnAgregar.addEventListener("click", function () {

    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    // Comprobar que los campos no estén vacíos
    if (nombre === "" || telefono === "") {
        alert("Debes ingresar un nombre y un teléfono.");
        return;
    }

    // Crear el objeto contacto
    const contacto = {
        nombre: nombre,
        telefono: telefono
    };

    // Agregar el contacto al arreglo
    contactos.push(contacto);

    // Limpiar los campos
    nombreInput.value = "";
    telefonoInput.value = "";

    // Mostrar los contactos
    mostrarContactos();

    // Actualizar el contador
    actualizarContador();
});


// ==========================================
// 4. MOSTRAR CONTACTOS
// ==========================================

function mostrarContactos() {

    // Limpiar la lista antes de volver a mostrarla
    listaContactos.innerHTML = "";

    const textoBusqueda = buscarInput.value.toLowerCase().trim();

    // Filtrar contactos según lo que se está buscando
    const contactosFiltrados = contactos.filter(function (contacto) {

        return contacto.nombre
            .toLowerCase()
            .includes(textoBusqueda);

    });


    // Mostrar mensaje si no hay contactos
    if (contactosFiltrados.length === 0) {

        mensajeVacio.style.display = "block";

        if (contactos.length === 0) {
            mensajeVacio.textContent = "Todavía no agregaste contactos.";
        } else {
            mensajeVacio.textContent = "No se encontraron contactos.";
        }

        return;

    } else {

        mensajeVacio.style.display = "none";
    }


    // Crear cada contacto dinámicamente
    contactosFiltrados.forEach(function (contacto) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                <strong>${contacto.nombre}</strong>
                <br>
                ${contacto.telefono}
            </span>

            <button class="btnEliminar">
                Eliminar
            </button>
        `;


        // Agregar el contacto a la lista
        listaContactos.appendChild(li);

         // ==========================================
        // EVENT LISTENER PARA ELIMINAR
        // ==========================================

        const btnEliminar = li.querySelector(".btnEliminar");

        btnEliminar.addEventListener("click", function () {

            // Buscar la posición del contacto en el arreglo
            const posicion = contactos.indexOf(contacto);

            // Eliminarlo del arreglo
            contactos.splice(posicion, 1);

            // Volver a mostrar los contactos
            mostrarContactos();

            // Actualizar contador
            actualizarContador();
        });

    });
}


// ==========================================
// 5. BUSCAR CONTACTOS
// ==========================================

buscarInput.addEventListener("input", function () {

    // Mostrar los contactos mientras el usuario escribe
    mostrarContactos();

});


// ==========================================
// 6. ACTUALIZAR CONTADOR
// ==========================================

function actualizarContador() {

    // El contador siempre representa TODOS
    // los contactos guardados
    contadorContactos.textContent = contactos.length;

}
        


    


    
