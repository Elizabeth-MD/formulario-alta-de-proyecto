// A
// A.2. Referencias a los elementos del HTML
const form = document.getElementById('formulario-proyecto');
const mensajeError = document.getElementById('mensaje-error');
const resultado = document.getElementById('resultado-registro');

// A.3. La lógica del experimento
form.addEventListener('submit', (e) => {
    // 1. ¡SUPER IMPORTANTE! Evita que la página se recargue
    e.preventDefault();

    // 2. Captura de datos
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const terminos = document.getElementById('terminos').checked; // .checked para booleanos

    // Para los radio buttons, buscamos el que esté marcado
    const prioridadElemento = document.querySelector('input[name="prioridad"]:checked');
    const prioridad = prioridadElemento ? prioridadElemento.value : "";

    
    // 3. Validación
    mensajeError.innerText = ""; // Limpiamos errores previos
    
    if (nombre.length < 3) {
        mensajeError.innerText = "El nombre debe tener al menos 3 caracteres.";
        return; // Detiene la función aquí si hay error
    };
    if (nombre.length > 20) {
        mensajeError.innerText = "El nombre debe tener como máximo 20 caracteres letras.";
        return; 
    };
    
    if (categoria === "") {
        mensajeError.innerText = "Selecciona una categoría.";
        return;
    };
    if (!terminos) {
        mensajeError.innerText = "Debes aceptar las condiciones.";
        return;
    };
    
    // 4. Si todo está bien, mostramos el mensaje de éxito
    resultado.innerHTML = `
    <p id="mensaje-exito">✅ Proyecto <strong>"${nombre}"</strong> registrado con éxito.</p>
    <ul>
    <li>Categoría: ${categoria}</li>
    <li>Prioridad: ${prioridad}</li>
    </ul>
    `;

    // C.2.
    const cardProyecto = document.createElement('div');
    cardProyecto.className = 'proyecto-item'; // Para poder darle estilos con css
    
    
    // B.3. La lógica del experimento
    // Metemos la info (usando Template Literals)
    cardProyecto.innerHTML = `
    <div class="proyecto-item--datos">
    <p class="capitalize"><strong>${nombre}</strong></p>
    <p class="capitalize">${categoria}</p>
    <p class="capitalize">${prioridad}</p>
    </div>
    <button class="btn-borrar">🗑️</button>
    `;
    
    // Reto: Implementa la creación de estas "cards" y haz que, si el proyecto tiene prioridad "alta", la card tenga un borde rojo grueso.
    if (prioridad === "Alta") {
        cardProyecto.classList.add("prioridad-alta");
        console.log(prioridad)
    };
    if (prioridad === "Baja") {
        cardProyecto.classList.add("prioridad-baja");
        console.log(prioridad)
    };
    
    // creamos el botón de borrar
    const botonBorrar = cardProyecto.querySelector('.btn-borrar');
    botonBorrar.onclick = function() {
        cardProyecto.remove(); // Se borra el elemento
    };
    console.log(listadoProyectos.length)
    // C. incluimos el proyecto en la lista
    document.getElementById('items-lista').appendChild(cardProyecto);
    

    // incluimos el proyecto en la lista
    document.getElementById('lista-proyectos-dinamica').appendChild(cardProyecto);
    if (nombre !== "" && categoria !== "" && prioridad !== "") {
        listadoProyectos.push({
            nombrePryct: nombre,
            categoriaPryct: categoria,
            prioridadPryct: prioridad
        });
    };
    console.log(`Proyecto nuevo añadido. Tienes ${listadoProyectos.length} proyectos guardados.`);

    form.reset(); // Limpia todo el formulario de golpe
    document.getElementById('numero-caracteres').innerText = "0"; // Para que no se quede con el número del proyecto anterior
});

// Reto: Mientras el usuario escribe en el campo 'nombre', se cuenten los caracteres en tiempo real debajo del input.
const inputNombre = document.getElementById('nombre');

inputNombre.addEventListener('input', () => {
    const nombre = document.getElementById('nombre').value;
    const span = document.getElementById('numero-caracteres');
    const caracteresActual = nombre.length;
    const maxCaracteres = 20;
    const minCaracteres = 3;

    span.innerText = caracteresActual
    
    if (caracteresActual > maxCaracteres || caracteresActual < minCaracteres) {
        span.style.transition = "0.3s"
        span.style.color = "lightcoral";
    } else {
        span.style.transition = "0.3s"
        span.style.color = "palegreen";
    };
});

// B
// B.2. Referencias a los elementos del HTML
// creamos el contenedor del proyecto (div)




// C
// 1. Creamos un Array a modo base de datos de nuestras frases (impulsos)
const listadoProyectos = [
    {nombrePryct: 'Cafetería "Punto4"', categoriaPryct: "Desarrollo Web", prioridadPryct: "alta"}
]
// 2. Referencias a los elementos del HTML

// 3. La lógica del experimento




console.log(listadoProyectos)

/*  A   B   C   */

// X
// 1. Creamos un Array a modo base de datos de nuestras frases (impulsos)

// 2. Referencias a los elementos del HTML

// 3. La lógica del experimento

