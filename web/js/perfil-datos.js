document.addEventListener("DOMContentLoaded", function () {
    cargarDatosUsuario();
});

// Datos de ejemplo en localStorage
if (!localStorage.getItem("usuario")) {
    localStorage.setItem("usuario", JSON.stringify({
        nombre: "Carlos Javier Piquer Mañez",
        email: "carlos@example.com",
        telefono: "626321987",
        direccion: "Av. de Suècia, s/n, El Pla del Real, 46010 València, Valencia"
    }));
}

function cargarDatosUsuario() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    document.getElementById("userName").value = usuario.nombre;
    document.getElementById("userEmail").value = usuario.email;
    document.getElementById("userPhone").value = usuario.telefono;
    document.getElementById("userAddress").value = usuario.direccion;
}

document.getElementById("perfilForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let usuarioActualizado = {
        nombre: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value, // Mantiene el email sin cambios
        telefono: document.getElementById("userPhone").value,
        direccion: document.getElementById("userAddress").value
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioActualizado));

    alert("Datos actualizados correctamente.");
});
