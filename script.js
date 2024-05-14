document.addEventListener("DOMContentLoaded", function() {
  // Mapeo de números a respuestas
  const respuestas = ["Nunca", "A veces", "Normalmente", "Casi siempre", "Siempre"];

  // Datos de frecuencia de compartir contenido
  const datosCompartirContenido = [3, 4, 5, 4, 3, 5, 2, 5, 4, 3, 4, 5, 4, 4, 3, 5, 4, 3, 5, 2, 3, 4, 5, 4, 3, 3, 4, 5, 4, 3, 5, 2, 5, 4, 3, 4, 3, 4, 4, 3, 5, 4, 5, 4, 3, 2, 5, 5, 3, 4];

  // Convertir números a respuestas
  const respuestasCompartirContenido = datosCompartirContenido.map(numero => respuestas[numero - 1]);

  // Cargar los datos desde el archivo JSON
  fetch('datos.json')
    .then(response => response.json())
    .then(data => {
      // Iterar sobre los datos y construir la tarjeta para cada uno
      data.forEach((item, index) => {
        // Construir el contenido de la tarjeta escapando el HTML
        var content = `
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${escapeHTML(item.Centro)}</h5>
                <p class="card-text">Grado: ${escapeHTML(item.Grado)}</p>
                <p class="card-text">Sexo: ${escapeHTML(item.Sexo)}</p>
                <p class="card-text">Edad: ${item.Edad}</p>
                <p class="card-text"><strong>¿Con qué frecuencia revisas tus redes sociales?</strong>: ${item["¿Con qué frecuencia revisas tus redes sociales?"]}</p>
                <p class="card-text"><strong>¿Con qué frecuencia compartes contenido en tus redes sociales?</strong>: ${respuestasCompartirContenido[index]}</p>
                <p class="card-text"><strong>¿Cuántas veces al día publicas en tus redes sociales?</strong>: ${item["¿Cuántas veces al día publicas en tus redes sociales?"]}</p>
                <p class="card-text"><strong>¿Te sientes dependiente de tus redes sociales para mantenerte informado/a?</strong>: ${item["¿Te sientes dependiente de tus redes sociales para mantenerte informado/a?"]}</p>
                <p class="card-text"><strong>¿Experimentas ansiedad si pasas un día sin revisar tus redes sociales?</strong>: ${item["¿Experimentas ansiedad si pasas un día sin revisar tus redes sociales?"]}</p>
              </div>
            </div>
          </div>
        `;
        // Agregar la tarjeta a la sección de datos
        document.getElementById('data').innerHTML += content;
      });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

// Función para escapar el HTML
function escapeHTML(html) {
  var escapeEl = document.createElement('textarea');
  escapeEl.textContent = html;
  return escapeEl.innerHTML;
}

