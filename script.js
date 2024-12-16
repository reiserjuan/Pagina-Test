function openModal(videoUrl) {
    document.getElementById('modalVideo').src = videoUrl; // Establecer la URL del video
    document.getElementById('myModal').style.display = "flex"; // Mostrar el modal
}

function closeModal() {
    document.getElementById('myModal').style.display = "none"; // Ocultar el modal
    document.getElementById('modalVideo').src = ""; // Detener el video
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}
