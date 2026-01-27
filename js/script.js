// Esperamos a que el HTML esté totalmente cargado
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contact-form');


    //Actualizar copyright automáticamente
    const copyrightParagraph = document.querySelector('footer p');
    if (copyrightParagraph) {
            const year = new Date().getFullYear();
            copyrightParagraph.innerHTML = `&copy; ${year} BALABITS STUDIO. Todos los derechos reservados.`;

    }

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

                    //Preparamos los datos para enviar
            const datos = new FormData(formulario);
                    
                    // Enviamos a Formspree usando FETCH
            fetch("https://formspree.io/f/mpqdbyle", {
                method: "POST",
                body: datos,
                headers: {
                    'accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    //SI TODO SALE BIEN: Mostramos el mensaje de éxito
                    const contenedor = document.querySelector('.contact-container');
                    contenedor.innerHTML = `
                        <div style="text-align: center; padding: 20px;">
                            <h2 style="color: var(--color-primary); margin-bottom: 15px;">¡Gracias, ${nombre}!</h2>
                            <p style="margin-bottom: 25px; color: var(--color-text);">Tu mensaje ha sido enviado con éxito. Revisaremos tu consulta sobre el servicio de <strong>${servicio}</strong> y te escribiremos a <strong>${email}</strong>.</p>
                            <button onclick="location.reload()" class="cta-button">Enviar otro mensaje</button>
                        </div>
                    `;
                } else {
                    // SI HAY ERROR
                    alert("Hubo un problema con el servidor. Por favor, intenta más tarde.");
                }
            });

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
                        Enviar otra consulta
                    </button>
                </div>
            `;
            
            // Opcional: Mostrar en consola para verificar que los datos se capturaron bien
            console.log("Formulario enviado por:", nombre, email, mensaje);
        });
    }
});
