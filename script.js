document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("audio.mp3");
    const noButton = document.getElementById("noButton");

    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };

    playAudio();

    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
        }
    });

    function moveButtonNearCursor(event) {
        const offsetX = 20; // Distancia del botón desde el cursor en el eje X
        const offsetY = 20; // Distancia del botón desde el cursor en el eje Y

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Obtener el tamaño de la ventana
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;

        // Asegurar que el botón no se desplace fuera de la pantalla
        const newX = Math.min(Math.max(mouseX + offsetX, 0), maxX);
        const newY = Math.min(Math.max(mouseY + offsetY, 0), maxY);

        noButton.style.position = "absolute";
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }

    // Mover el botón cerca del cursor
    document.body.addEventListener("mousemove", moveButtonNearCursor);
});
