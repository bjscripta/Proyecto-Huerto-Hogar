document.addEventListener('DOMContentLoaded', () => {
    cargarDatosUsuario();
});

function actualizarUsuario() {
    // 1. Limpia los mensajes de error anteriores
    document.getElementById('nombreError').textContent = '';
    document.getElementById('apellidoError').textContent = '';
    document.getElementById('telefonoError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // 2. Obtiene los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    
    let isValid = true; // Variable para rastrear si la validación es exitosa
    
    // 3. Validaciones

    // Si el nombre no está vacío, validarlo. Si está vacío, se puede actualizar el resto.
    if (nombre !== '') {
        if (nombre.length < 2) {
            document.getElementById('nombreError').textContent = 'El nombre debe tener al menos 2 caracteres.';
            isValid = false;
        }
    }
    
    // Si el apellido no está vacío, validarlo.
    if (apellido !== '') {
        if (apellido.length < 2) {
            document.getElementById('apellidoError').textContent = 'El apellido debe tener al menos 2 caracteres.';
            isValid = false;
        }
    }
    
    // Si el teléfono no está vacío, validarlo.
    if (telefono !== '') {
        const telefonoRegex = /^\+.*[0-9]{11,}/; // Valida que empiece con + y tenga al menos 11 números
        if (!telefonoRegex.test(telefono)) {
            document.getElementById('telefonoError').textContent = 'Formato de teléfono inválido. Debe empezar con "+" y tener al menos 11 números.';
            isValid = false;
        }
    }
    
    // Si el email no está vacío, validarlo.
    if (email !== '') {
        const emailRegex = /^[^\s@]+@(gmail\.com|duocuc\.cl|profesor\.duocuc\.cl)$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'El correo debe ser @gmail.com, @duocuc.cl o @profesor.duocuc.cl.';
            isValid = false;
        }
    }

    // 4. Si hay al menos un campo con datos, y la validación es correcta, actualizar.
    const hasData = nombre || apellido || telefono || email;

    if (!hasData) {
        alert('Debes ingresar al menos un campo para actualizar.');
        return; // Detiene la función si no hay nada que actualizar
    }

    if (isValid) {
        // Actualiza los campos solo si no están vacíos
        if (nombre !== '') localStorage.setItem('nombre', nombre);
        if (apellido !== '') localStorage.setItem('apellido', apellido);
        if (telefono !== '') localStorage.setItem('telefono', telefono);
        if (email !== '') localStorage.setItem('email', email);
        
        cargarDatosUsuario();
        alert('¡Datos actualizados correctamente!');
    }
}

function cargarDatosUsuario() {
    const nombreGuardado = localStorage.getItem('nombre') || 'N/A';
    const apellidoGuardado = localStorage.getItem('apellido') || 'N/A';
    const telefonoGuardado = localStorage.getItem('telefono') || 'N/A';
    const emailGuardado = localStorage.getItem('email') || 'N/A';

    document.getElementById('display-nombre').textContent = nombreGuardado;
    document.getElementById('display-apellido').textContent = apellidoGuardado;
    document.getElementById('display-telefono').textContent = telefonoGuardado;
    document.getElementById('display-email').textContent = emailGuardado;
    
    document.getElementById('nombre').value = nombreGuardado === 'N/A' ? '' : nombreGuardado;
    document.getElementById('apellido').value = apellidoGuardado === 'N/A' ? '' : apellidoGuardado;
    document.getElementById('telefono').value = telefonoGuardado === 'N/A' ? '' : telefonoGuardado;
    document.getElementById('email').value = emailGuardado === 'N/A' ? '' : emailGuardado;
}