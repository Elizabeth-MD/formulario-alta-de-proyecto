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
        <p id="mensaje-exito">✅ Proyecto "${nombre}" registrado con éxito.</p>
        <ul>
            <li>Categoría: ${categoria}</li>
            <li>Prioridad: ${prioridad}</li>
        </ul>
    `;
    form.reset(); // Limpia todo el formulario de golpe
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




// X
// 1. Creamos un Array a modo base de datos de nuestras frases (impulsos)

// 2. Referencias a los elementos del HTML

// 3. La lógica del experimento

