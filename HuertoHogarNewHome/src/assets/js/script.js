// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Capturar el formulario y el botón
    const subscriptionForm = document.querySelector('.subscription-form');
    const emailInput = document.getElementById('email');
    const subscribeBtn = document.querySelector('.subscribe-btn');
    
    // Opción 1: Evento click en el botón
    subscribeBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir envío del formulario
        const email = emailInput.value;
        
        if (email) {
            console.log('Email capturado:', email);
            // Aquí puedes enviar el email a un servidor
            alert('¡Gracias por suscribirte con: ' + email);
            emailInput.value = ''; // Limpiar el campo
        } else {
            alert('Por favor, introduce tu email');
        }
    });
});