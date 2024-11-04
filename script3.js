function showMessage() {
    const message = document.getElementById("message");
    message.classList.toggle("hidden");
}
function playMusic() {
    const music = document.getElementById("background-music");
    music.play();
    document.getElementById("play-music-button").style.display = 'none'; // Oculta el botón después de iniciar la música
}

const messages = [
    "Si lees",
    "Esto",
    "Eres",
    "Autista"
];

let index = 0;

function changeMessage() {
    document.getElementById("inspirational-message").innerText = messages[index];
    index = (index + 1) % messages.length;
}

setInterval(changeMessage, 10000); // Cambia el mensaje cada 3 segundos

document.addEventListener("DOMContentLoaded", function() {
    let progress = document.querySelector(".progress");
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");
    let width = 0;

    // Simulación de la carga de la barra
    let loading = setInterval(() => {
        if (width >= 100) {
            clearInterval(loading);
            loader.style.display = "none";  // Oculta la pantalla de carga
            content.style.display = "block";  // Muestra el contenido principal
        } else {
            width += 5;
            progress.style.width = width + "%";
        }
    }, 200); // Ajusta el tiempo de carga (100 ms)
});
