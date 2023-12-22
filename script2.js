function consultarDNI() {
    const dni = document.getElementById('dniInput').value;
    const apiUrl = `https://raw.githubusercontent.com/DanielLazaro1555/Prueba-Tecnica/main/bd.json`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red - Código ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const resultadoDNI = data.numeroDocumento === dni ? data : null;

        if (resultadoDNI) {
          mostrarResultado(resultadoDNI);
        } else {
          mostrarError("Número de DNI no encontrado");
        }
      })
      .catch(error => {
        console.error('Error al realizar la consulta:', error);
        mostrarError("Error al realizar la consulta");
      });
  }

  function mostrarResultado(data) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p class="lead">Resultados:</p>
      <p><strong>Nombres:</strong> ${data.nombres}</p>
      <p><strong>Apellidos:</strong> ${data.apellidoPaterno} ${data.apellidoMaterno}</p>
      <p><strong>DNI:</strong> ${data.numeroDocumento}</p>
    `;
  }

  function mostrarError(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p class="text-danger">${mensaje}</p>`;
  }