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
