function buscarDNI() {
    var dni = document.getElementById("dniInput").value;

    if (!/^\d{8}$/.test(dni)) {
        document.getElementById("result").innerHTML = "Número de DNI inválido. Debe tener 8 dígitos.";
        return;
    }

    var resultadoBusqueda = buscarEnBaseDeDatos(dni);

    if (resultadoBusqueda) {
        document.getElementById("result").innerHTML = "Búsqueda exitosa:<br>Nombres: " + resultadoBusqueda.nombres + "<br>Apellidos: " + resultadoBusqueda.apellidos + "<br>DNI: " + resultadoBusqueda.dni;
    } else {
        document.getElementById("result").innerHTML = "Número de DNI no encontrado.";
    }
}

function buscarEnBaseDeDatos(dni) {
    var baseDeDatos = {
        "12345678": {
            nombres: "Juan",
            apellidos: "Pérez",
            dni: "12345678"
        },
        "87654321": {
            nombres: "María",
            apellidos: "Gómez",
            dni: "87654321"
        }
    };

    return baseDeDatos[dni];
}
