document.addEventListener('wheel', function(event) {
    // Verifica la dirección del desplazamiento y permite el desplazamiento suave
    window.scrollBy({
        top: event.deltaY,  // Movimiento vertical del ratón
        behavior: 'smooth'  // Hacer que el desplazamiento sea suave
    });
});

document.addEventListener('mousemove', function(event) {
    var robotHead = document.querySelector('.robot-head');
    var leftEye = document.querySelector('.left-eye');
    var rightEye = document.querySelector('.right-eye');

    // Obtener la posición del ratón
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Obtener la posición del centro de la cabeza del robot
    var headRect = robotHead.getBoundingClientRect();
    var headCenterX = headRect.left + headRect.width / 2;
    var headCenterY = headRect.top + headRect.height / 2;

    // Calcular el ángulo entre los ojos y el ratón
    var angle = Math.atan2(mouseY - headCenterY, mouseX - headCenterX);

    // Calcular la distancia máxima de los ojos (puedes ajustar este valor)
    var eyeDistance = 10;

    // Mover los ojos según la posición del ratón
    leftEye.style.transform = 'translate(' + (Math.cos(angle) * eyeDistance) + 'px, ' + (Math.sin(angle) * eyeDistance) + 'px)';
    rightEye.style.transform = 'translate(' + (Math.cos(angle) * eyeDistance) + 'px, ' + (Math.sin(angle) * eyeDistance) + 'px)';
});

// Seleccionamos la imagen del logo
const logo = document.getElementById('logo-bo6');

// Array de rutas de imágenes
const images = [
    
    "bo6.1.png",        // Imagen 1
    "bo6.2.png",    // Imagen 2
    "bo6.3.png",    // Imagen 3
    "bo6.4.png"     // Imagen 4
    
];

// Variable para controlar la imagen actual
let currentImageIndex = 0;

// Función para cambiar la imagen al hacer clic
logo.addEventListener('click', function() {
    // Cambiamos la imagen al siguiente índice del array
    currentImageIndex = (currentImageIndex + 1) % images.length;
    logo.src = images[currentImageIndex];
});





