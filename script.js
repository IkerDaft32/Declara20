// Preguntas, respuestas y pistas
const preguntas = [
    { pregunta: "¿Cuál fue nuestra primera cita?", respuesta: "cine", pista: "Fue un lugar donde vimos una película" },
    { pregunta: "¿Cuál es mi color favorito?", respuesta: "azul", pista: "El color del cielo" },
    { pregunta: "¿Dónde nos conocimos?", respuesta: "escuela", pista: "Un lugar lleno de libros y maestros" },
    { pregunta: "¿Cómo se llama mi mascota?", respuesta: "firulais", pista: "Un nombre divertido para un perro" },
    { pregunta: "¿Qué día nos hicimos novios?", respuesta: "14 febrero", pista: "Un día especial para los enamorados" },
    { pregunta: "¿Cómo se llama la canción que siempre escuchamos juntos?", respuesta: "perfect", pista: "Es una canción de Ed Sheeran" }
];

let preguntaActual = 0;

// Referencias a los elementos del HTML
const content = document.getElementById('content');
const questionElement = document.getElementById('question');
const hintElement = document.getElementById('hint');
const messageElement = document.getElementById('message');
const inputElement = document.getElementById('answer');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');

// Iniciar el cuestionario
startBtn.addEventListener('click', function() {
    content.style.display = 'block';
    mostrarPregunta();
});

// Función para mostrar la pregunta actual con su pista
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    questionElement.textContent = pregunta.pregunta;
    hintElement.textContent = `Pista: ${pregunta.pista}`;
    inputElement.value = '';  // Limpiar el campo de respuesta
    messageElement.textContent = '';  // Limpiar el mensaje

    // Aplicar diseño especial si es la última pregunta
    if (preguntaActual === preguntas.length - 1) {
        content.classList.add('special-design');
    } else {
        content.classList.remove('special-design');
    }
}

// Validar la respuesta y pasar a la siguiente pregunta
nextBtn.addEventListener('click', function() {
    let respuestaUsuario = inputElement.value.toLowerCase();
    
    if (respuestaUsuario === preguntas[preguntaActual].respuesta.toLowerCase()) {
        messageElement.textContent = '¡Correcto! 💕';
    } else {
        messageElement.textContent = 'Mmm... no es correcto, pero aún te amo. ❤️';
    }
    
    // Avanzar a la siguiente pregunta después de un pequeño retraso
    setTimeout(function() {
        preguntaActual++;
        
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            terminarCuestionario();
        }
    }, 2000);  // 2 segundos de retraso para ver la respuesta
});

// Función que se llama al finalizar todas las preguntas
function terminarCuestionario() {
    questionElement.textContent = "¡Has completado el desafío de amor! 💖";
    messageElement.textContent = "Gracias por responder. ¡Te amo!";
    inputElement.style.display = 'none';  // Ocultar el campo de texto
    nextBtn.style.display = 'none';  // Ocultar el botón de siguiente
}
