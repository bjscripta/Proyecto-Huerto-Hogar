document.addEventListener('DOMContentLoaded', () => {
    const btnProductos = document.getElementById('btn-productos');
    const btnUsuarios = document.getElementById('btn-usuarios');
    const helpLink = document.querySelector('.nav-menu li:last-child a');

    // Funcionalidad para los botones de gestión
    btnProductos.addEventListener('click', () => {
        alert('Redirigiendo a la sección de Gestión de Productos...');
    });

    btnUsuarios.addEventListener('click', () => {
        alert('Redirigiendo a la sección de Gestión de Usuarios...');
    });

    // Funcionalidad para la sugerencia de Ayuda
    helpLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('¡Bienvenido! Este es tu panel de administración. Aquí puedes gestionar productos, usuarios, ver órdenes y reportes.');
    });
});