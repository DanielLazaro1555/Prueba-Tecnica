function generarFechas() {
    var year = document.getElementById('yearInput').value;

    if (!year) {
        alert('Por favor, ingrese un año.');
        return;
    }

    var fechas = [];

    for (var i = 0; i < 12; i++) {
        var primerDia = new Date(year, i, 1);
        var ultimoDia = new Date(year, i + 1, 0);

        fechas.push({
            mes: obtenerNombreMes(i + 1),
            primerDia: primerDia.toLocaleDateString(),
            ultimoDia: ultimoDia.toLocaleDateString()
        });
    }

    mostrarResultados(fechas);
}

function obtenerNombreMes(numeroMes) {
    var meses = [
        "enero", "febrero", "marzo", "abril",
        "mayo", "junio", "julio", "agosto",
        "septiembre", "octubre", "noviembre", "diciembre"
    ];

    return meses[numeroMes - 1];
}

function mostrarResultados(fechas) {
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    fechas.forEach(function (fecha) {
        var tarjetaHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${fecha.mes}</h5>
                    <p class="card-text">Primer día: ${fecha.primerDia}</p>
                    <p class="card-text">Último día: ${fecha.ultimoDia}</p>
                </div>
            </div>
        `;

        resultadosDiv.innerHTML += tarjetaHTML;
    });
}
