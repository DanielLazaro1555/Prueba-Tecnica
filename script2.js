function consultarDNI() {
    // Obtener el número de DNI ingresado por el usuario
    const dni = document.getElementById('dniInput').value;
  
    // Construir la URL de la API de consulta
    const apiUrl = `https://api.apis.net.pe/v1/dni?numero=${dni}`;
  
    // Realizar la solicitud a la API utilizando fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Verificar si la respuesta contiene información válida
        if (data.success) {
          // Mostrar los resultados en la interfaz
          mostrarResultado(data);
        } else {
          mostrarError("Número de DNI inválido");
        }
      })
      .catch(error => {
        mostrarError("Error al realizar la consulta");
      });
  }
  
  function mostrarResultado(data) {
    // Mostrar los resultados en la interfaz
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p class="lead">Resultados:</p>
      <p><strong>Nombres:</strong> ${data.nombres}</p>
      <p><strong>Apellidos:</strong> ${data.apellidos}</p>
      <p><strong>DNI:</strong> ${data.dni}</p>
    `;
  }
  
  function mostrarError(mensaje) {
    // Mostrar mensajes de error en la interfaz
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p class="text-danger">${mensaje}</p>`;
  }
  