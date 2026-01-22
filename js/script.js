// Esperamos a que el HTML esté totalmente cargado
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contact-form');

    // Cuando el usuario haga click en "Enviar"
    if (formulario) {   
        formulario.addEventListener('submit', (evento) => {
            // 1. Evitamos que la página se recargue (comportamiento por defecto)
            evento.preventDefault();

            // 2. Obtenemos el nombre que escribió el usuario
            const nombreUsuario = document.getElementById('nombre').value;

            // 3. Reemplazo todo el contenido del contenedor.
            const contenedor = document.querySelector('.contact-container');

            // 3. Ocultamos el formulario y mostramos un mensaje lindo
            contenedor.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h2 style="color: var(--color-primary); margin-bottom: 15px;">
                        ¡Gracias, ${nombreUsuario}!
                    </h2>
                    <p style="margin-bottom: 25px;">
                        Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto con vos muy pronto para empezar a trabajar en tu proyecto.
                    </p>
                    <button onclick="location.reload()" class="cta-button">
                        Enviar otro mensaje
                    </button>
                </div>
            `;
        });

        // Hace que la pantalla suba suavemente al mensaje.
        // window.scrollTo({ top: 0, behavior: 'smooth'});
    }
});