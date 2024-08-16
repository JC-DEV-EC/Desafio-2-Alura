document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('encuesta');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío del formulario

        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const lenguaje = document.getElementById('lenguaje').value;

        // Mostrar el mensaje en un alert personalizado
        Swal.fire({
            title: '¡Hola!',
            text: `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`,
            icon: 'info',
        }).then((result) => {
            if (result.isConfirmed) {
                // Solicitar confirmación sobre el lenguaje
                Swal.fire({
                    title: '¿Te gusta estudiar ' + lenguaje + '?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Sí',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
                    } else {
                        Swal.fire('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
                    }
                    // Limpiar el formulario
                    form.reset();
                });
            }
        });
    });
});