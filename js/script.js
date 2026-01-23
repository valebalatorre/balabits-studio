// Esperamos a que el HTML esté totalmente cargado
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contact-form');

    // Verificamos que el formulario exista en la página actual
    if (formulario) {   
        formulario.addEventListener('submit', (evento) => {
            // 1. Evitamos que la página se recargue
            evento.preventDefault();

            // 2. Obtenemos los valores de los campos
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // 3. Validación: Si algún campo está vacío, mostramos alerta y cortamos la ejecución
            if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
                alert("Por favor, completa todos los campos antes de enviar.");
                return;
            }

            // 4. Seleccionamos el contenedor de cristal para mostrar el mensaje de éxito
            const contenedor = document.querySelector('.contact-container');

            // 5. Reemplazamos el formulario por un mensaje de agradecimiento profesional
            contenedor.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h2 style="color: var(--color-primary); margin-bottom: 15px;">
                        ¡Gracias, ${nombre}!
                    </h2>
                    <p style="margin-bottom: 25px; color: var(--color-text);">
                        Tu mensaje ha sido recibido con éxito. Nos pondremos en contacto con vos a tu correo <strong>${email}</strong> muy pronto para empezar a trabajar en tu proyecto.
                    </p>
                    <button onclick="location.reload()" class="cta-button">
                        Enviar otro mensaje
                    </button>
                </div>
            `;
            
            // Opcional: Mostrar en consola para verificar que los datos se capturaron bien
            console.log("Formulario enviado por:", nombre, email);
        });
    }
});