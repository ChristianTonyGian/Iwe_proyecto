document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");
    const recoverForm = document.getElementById("recover-form");
    const overlay = document.getElementById("overlay");
    const notificationModal = document.getElementById("notificationModal");
    const acceptBtn = document.getElementById("acceptBtn");
    const closeModal = document.getElementById("closeModal");

    // Función para mostrar el modal
    function showModal() {
        overlay.style.display = "block";
        notificationModal.style.display = "block";
    }

    // Función para ocultar el modal
    function hideModal() {
        overlay.style.display = "none";
        notificationModal.style.display = "none";
    }

    // Lógica para el formulario de registro
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar el envío del formulario
            showModal();  // Mostrar el modal

            // Redirigir al login al hacer clic en "Aceptar"
            acceptBtn.addEventListener("click", function() {
                hideModal();
                window.location.href = "login.html";
            });
        });
    }

    // Lógica para el formulario de recuperación de contraseña
    if (recoverForm) {
        recoverForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar el envío del formulario
            showModal();  // Mostrar el modal

            // Al hacer clic en "Aceptar", solo cerrar el modal
            acceptBtn.addEventListener("click", function() {
                hideModal();
            });
        });
    }

    // Cerrar el modal al hacer clic en la "X"
    if (closeModal) {
        closeModal.addEventListener("click", function() {
            hideModal();
        });
    }
});
