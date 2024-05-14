// Importar los datos
const datosHumanes = [
  { red: "ASIR", usuarios: [22, 24, 25, 21, 23, 20, 24, 23, 22, 24, 21, 23, 20, 22, 24, 23, 20, 25, 21, 22, 23, 20, 25] },
  { red: "DAM", usuarios: [22, 24, 20, 24, 23, 20, 24, 20, 23, 24, 20, 22, 24, 23, 20, 25, 22, 25, 23, 24, 22, 23, 25] }
];

const datosGetafe = [
  { red: "SMR", usuarios: [20, 21, 22, 20, 21, 22, 21, 22, 20, 21, 22, 20, 23, 21, 23, 22, 20, 21, 23, 22, 21, 23, 22] },
  { red: "DAW", usuarios: [21, 20, 21, 24, 22, 20, 24, 20, 22, 23, 20, 23, 22, 21, 22, 23, 21, 23, 22, 24, 20, 23, 21] }
];

// Configurar gráficos
const configHumanes = {
  type: 'bar',
  data: {
    labels: ['22', '24', '25', '21', '23', '20'],
    datasets: datosHumanes.map((data, index) => ({
      label: data.red,
      data: data.usuarios,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      // Agregar opción onHover para mostrar mensaje emergente con la pregunta y respuesta
      onHover: function (event, item) {
        if (item.length > 0) {
          const datasetIndex = item[0].datasetIndex;
          const dataIndex = item[0].index;
          const pregunta = preguntas[dataIndex];
          const respuesta = respuestasHumanes[dataIndex][datasetIndex];
          const mensaje = `Pregunta: ${pregunta}, Respuesta: ${respuesta}`;
          event.target.style.cursor = 'pointer';
          event.target.title = mensaje;
        } else {
          event.target.style.cursor = 'default';
          event.target.title = '';
        }
      }
    }))
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const configGetafe = {
  type: 'bar',
  data: {
    labels: ['20', '21', '22', '23'],
    datasets: datosGetafe.map((data, index) => ({
      label: data.red,
      data: data.usuarios,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      // Agregar opción onHover para mostrar mensaje emergente con la pregunta y respuesta
      onHover: function (event, item) {
        if (item.length > 0) {
          const datasetIndex = item[0].datasetIndex;
          const dataIndex = item[0].index;
          const pregunta = preguntas[dataIndex];
          const respuesta = respuestasGetafe[dataIndex][datasetIndex];
          const mensaje = `Pregunta: ${pregunta}, Respuesta: ${respuesta}`;
          event.target.style.cursor = 'pointer';
          event.target.title = mensaje;
        } else {
          event.target.style.cursor = 'default';
          event.target.title = '';
        }
      }
    }))
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Obtener el contexto del lienzo
const ctxHumanes = document.getElementById('chartHumanes').getContext('2d');
const ctxGetafe = document.getElementById('chartGetafe').getContext('2d');

// Crear gráficos
const myChartHumanes = new Chart(ctxHumanes, configHumanes);
const myChartGetafe = new Chart(ctxGetafe, configGetafe);

// Preguntas y respuestas
const preguntas = ["Centro", "Grado", "Sexo", "Edad", "¿Con qué frecuencia revisas tus redes sociales?", "¿Con qué frecuencia compartes contenido en tus redes sociales?", "¿Cuántas veces al día publicas en tus redes sociales?", "¿Te sientes dependiente de tus redes sociales para mantenerte informado/a?", "¿Experimentas ansiedad si pasas un día sin revisar tus redes sociales?"];

const respuestasHumanes = [
  ["Humanes", "ASIR", "M", "22", "3", "5", "4", "4", "3"],
  ["Humanes", "DAM", "M", "24", "5", "5", "4", "4", "5"],
  ["Humanes", "ASIR", "M", "25", "4", "4", "3", "3", "4"],
  ["Humanes", "DAM", "M", "20", "3", "5", "4", "4", "3"],
  ["Humanes", "ASIR", "M", "21", "5", "4", "5", "3", "3"],
  ["Humanes", "DAM", "M", "22", "4", "5", "3", "2", "1"],
  ["Humanes", "ASIR", "M", "23", "5", "5", "5", "4", "5"],
  ["Humanes", "DAM", "M", "24", "4", "4", "3", "3", "4"],
  ["Humanes", "ASIR", "M", "21", "5", "4", "5", "3", "3"],
  ["Humanes", "DAM", "M", "22", "4", "5", "3", "2", "1"],
  ["Humanes", "ASIR", "M", "23", "5", "5", "5", "4", "5"],
  ["Humanes", "DAM", "M", "24", "4", "4", "3", "3", "4"],
  ["Humanes", "ASIR", "M", "21", "5", "4", "5", "3", "3"],
  ["Humanes", "DAM", "M", "22", "4", "5", "3", "2", "1"],
  ["Humanes", "ASIR", "F", "20", "3", "4", "4", "3", "2"],
  ["Humanes", "DAM", "F", "25", "4", "5", "5", "5", "5"],
  ["Humanes", "ASIR", "F", "23", "5", "4", "3", "2", "1"],
  ["Humanes", "DAM", "F", "20", "4", "4", "3", "2", "1"],
  ["Humanes", "ASIR", "F", "21", "3", "3", "4", "4", "3"],
  ["Humanes", "DAM", "F", "22", "5", "4", "5", "3", "3"],
  ["Humanes", "ASIR", "F", "23", "3", "4", "5", "3", "2"],
  ["Humanes", "DAM", "F", "24", "5", "4", "3", "4", "3"]
];

const respuestasGetafe = [
  ["Getafe", "SMR", "F", "20", "4", "4", "5", "3", "2"],
  ["Getafe", "DAW", "F", "21", "3", "3", "4", "5", "4"],
  ["Getafe", "SMR", "F", "22", "5", "4", "5", "3", "3"],
  ["Getafe", "DAW", "F", "24", "4", "4", "3", "3", "4"],
  ["Getafe", "SMR", "F", "21", "2", "3", "4", "4", "3"],
  ["Getafe", "DAW", "F", "20", "3", "4", "4", "3", "2"],
  ["Getafe", "SMR", "F", "23", "3", "3", "2", "4", "4"],
  ["Getafe", "DAW", "F", "21", "4", "3", "4", "4", "4"],
  ["Getafe", "SMR", "F", "22", "5", "4", "5", "3", "3"],
  ["Getafe", "DAW", "F", "20", "2", "3", "4", "4", "3"],
  ["Getafe", "SMR", "M", "23", "5", "5", "5", "4", "5"],
  ["Getafe", "DAW", "M", "22", "4", "5", "3", "2", "1"],
  ["Getafe", "SMR", "M", "20", "3", "3", "2", "4", "4"],
  ["Getafe", "DAW", "M", "24", "5", "5", "4", "4", "5"],
  ["Getafe", "SMR", "M", "25", "4", "4", "3", "2", "1"],
  ["Getafe", "DAW", "M", "21", "4", "3", "4", "4", "4"],
  ["Getafe", "SMR", "M", "22", "3", "5", "4", "4", "3"],
  ["Getafe", "DAW", "M", "24", "5", "5", "4", "4", "5"],
  ["Getafe", "SMR", "M", "25", "4", "4", "3", "2", "1"],
  ["Getafe", "DAW", "M", "21", "4", "5", "4", "3", "2"]
];

// Función para crear elementos HTML de preguntas y respuestas en forma de tabla
function crearPreguntasRespuestas(lista, preguntas, respuestas) {
  // Crear tabla
  const table = document.createElement('table');
  table.classList.add('table', 'table-bordered');

  // Crear encabezado de tabla
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  preguntas.forEach(pregunta => {
    const th = document.createElement('th');
    th.textContent = pregunta;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  // Crear cuerpo de tabla con respuestas
  const tbody = document.createElement('tbody');
  respuestas.forEach(respuesta => {
    const tr = document.createElement('tr');
    respuesta.forEach(valor => {
      const td = document.createElement('td');
      td.textContent = valor;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  // Agregar tabla a la lista
  lista.appendChild(table);
}

// Llamar a la función para cada gráfico
const preguntasHumanes = document.getElementById('preguntasHumanes');
const preguntasGetafe = document.getElementById('preguntasGetafe');
crearPreguntasRespuestas(preguntasHumanes, preguntas, respuestasHumanes);
crearPreguntasRespuestas(preguntasGetafe, preguntas, respuestasGetafe);


// Configurar gráfico circular para Frecuencia de revisión de redes sociales
const configFrecuenciaRevision = {
  type: 'doughnut',
  data: {
    labels: ['Promedio en Humanes', 'Promedio en Getafe'],
    datasets: [{
      label: 'Frecuencia de revisión de redes sociales',
      data: [4.08, 3.63],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Frecuencia de revisión de redes sociales',
      }
    }
  }
};
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Crear el título
  const chartTitle = document.createElement('h2');
  chartTitle.textContent = 'Frecuencia de Interacción en Redes Sociales';
  chartTitle.classList.add('chart-title');

  // Obtener el contenedor del gráfico circular
  const chartContainer = document.getElementById('chartContainer');

  // Agregar el título al contenedor
  chartContainer.appendChild(chartTitle);
});

// Obtener el contexto del lienzo para el gráfico circular
const ctxFrecuenciaRevision = document.getElementById('chartFrecuenciaRevision').getContext('2d');

// Crear el gráfico circular
const myChartFrecuenciaRevision = new Chart(ctxFrecuenciaRevision, configFrecuenciaRevision);


// Datos
const datos = {
  labels: ['Revisión', 'Compartir', 'Publicaciones', 'Dependencia', 'Ansiedad'],
  datasets: [{
    label: 'Promedio en Humanes',
    data: [4.08, 4.33, 3.83, 3.17, 2.92],
    borderColor: 'rgba(255, 99, 132, 1)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    pointRadius: 5,
    pointHoverRadius: 8
  }, {
    label: 'Promedio en Getafe',
    data: [3.63, 3.63, 3.42, 3.42, 3.13],
    borderColor: 'rgba(54, 162, 235, 1)',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderWidth: 2,
    pointBackgroundColor: 'rgba(54, 162, 235, 1)',
    pointRadius: 5,
    pointHoverRadius: 8
  }]
};

// Opciones
const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Promedio de Interacciones en Redes Sociales',
      font: {
        size: 24
      }
    }
  }
};

// Obtener el contexto del lienzo
const ctx = document.getElementById('lineChart').getContext('2d');

// Crear el gráfico de líneas
const lineChart = new Chart(ctx, {
  type: 'line',
  data: datos,
  options: options
});
