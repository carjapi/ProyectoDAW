document.addEventListener("DOMContentLoaded", function () {
    cargarUsuarios();
});

// Datos de ejemplo para usuarios (en un backend real, esto vendría de una base de datos)
let usuarios = [
    { id: 1, nombre: "Juan Pérez", email: "juan@example.com", rol: "usuario", activo: true },
    { id: 2, nombre: "María López", email: "maria@example.com", rol: "admin", activo: true },
    { id: 3, nombre: "Carlos García", email: "carlos@example.com", rol: "usuario", activo: false }
];

function cargarUsuarios() {
    let tableBody = document.getElementById("usuariosTableBody");
    tableBody.innerHTML = ""; // Limpiar la tabla antes de llenarla

    usuarios.forEach(usuario => {
        let row = `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.rol}</td>
            <td>${usuario.activo ? "Activo" : "Inactivo"}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editarUsuario(${usuario.id})">Editar</button>
                <button class="btn btn-${usuario.activo ? 'danger' : 'success'} btn-sm" onclick="cambiarEstado(${usuario.id})">
                    ${usuario.activo ? "Desactivar" : "Activar"}
                </button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function cambiarEstado(id) {
    let usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        usuario.activo = !usuario.activo;
        cargarUsuarios(); // Recargar la tabla para reflejar cambios
    }
}

function editarUsuario(id) {
    let usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        document.getElementById("editUserId").value = usuario.id;
        document.getElementById("editUserName").value = usuario.nombre;
        document.getElementById("editUserEmail").value = usuario.email;
        document.getElementById("editUserRole").value = usuario.rol;
        
        // Mostrar modal de edición
        let editUserModal = new bootstrap.Modal(document.getElementById('editUserModal'));
        editUserModal.show();
    }
}

document.getElementById("editUserForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let userId = parseInt(document.getElementById("editUserId").value);
    let userName = document.getElementById("editUserName").value;
    let userEmail = document.getElementById("editUserEmail").value;
    let userRole = document.getElementById("editUserRole").value;

    let usuario = usuarios.find(u => u.id === userId);
    if (usuario) {
        usuario.nombre = userName;
        usuario.email = userEmail;
        usuario.rol = userRole;
        cargarUsuarios();
        
        // Cerrar modal después de la edición
        let editUserModal = bootstrap.Modal.getInstance(document.getElementById('editUserModal'));
        editUserModal.hide();
    }
});
