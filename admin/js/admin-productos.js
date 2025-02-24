// Lista de productos en memoria (NO localStorage)
let productos = [
    { 
        id: 1, 
        imagen: "../web/img/atlantis.png", 
        nombre: "Lamzu Atlantis OG", 
        descripcion: "Un ratón ultra ligero con gran precisión para gaming.", 
        categoria: "garra",
        precio: 109.90, 
        stock: 10 
    },
    { 
        id: 2, 
        imagen: "../web/img/RazerDeath.png", 
        nombre: "Razer DeathAdder V3 Pro", 
        descripcion: "Diseño ergonómico y sensor de alta precisión.", 
        categoria: "palma",
        precio: 129.99, 
        stock: 5 
    }
];

document.addEventListener("DOMContentLoaded", function() {
    checkAdminAccess();
    cargarProductos();
});

// Verifica el acceso del usuario
function checkAdminAccess() {
    const role = localStorage.getItem("userRole");
    console.log("Verificando acceso: Rol actual en localStorage:", role);
    if (!role || role !== "admin") {
        alert("Acceso denegado. Redirigiendo a inicio...");
        window.location.href = "../web/index.html";
    }
}

// Carga los productos en la tabla
function cargarProductos() {
    let tablaProductos = document.getElementById("productTableBody");
    if (!tablaProductos) {
        console.error("No se encontró la tabla de productos.");
        return;
    }
    
    tablaProductos.innerHTML = ""; // Limpiar antes de recargar

    productos.forEach((producto, index) => {
        let fila = `<tr>
            <td>${producto.id}</td>
            <td><img src="${producto.imagen}" alt="Producto" width="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.categoria}</td>
            <td>${producto.precio.toFixed(2)} €</td>
            <td>${producto.stock}</td>
            <td>
                <button class='btn btn-warning btn-sm' onclick="editarProducto(${index})">Editar</button>
                <button class='btn btn-danger btn-sm' onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
        </tr>`;
        
        tablaProductos.innerHTML += fila;
    });
}

// Evento para añadir un producto
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario enviado correctamente."); // <-- Verifica si se imprime en consola

    const imageFile = document.getElementById("productImage").files[0];
    const name = document.getElementById("productName").value.trim();
    const description = document.getElementById("productDescription").value.trim();
    const categoria = document.getElementById("productCategory").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const stock = parseInt(document.getElementById("productStock").value);

    // Validación de campos
    if (!imageFile || !name || !description || !categoria || isNaN(price) || isNaN(stock)) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Crear URL de imagen
    const imageUrl = URL.createObjectURL(imageFile);

    // Crear nuevo producto
    const nuevoProducto = { 
        id: productos.length + 1, 
        imagen: imageUrl, 
        nombre: name, 
        descripcion: description,
        categoria: categoria,
        precio : price, 
        stock 
    };
    
    productos.push(nuevoProducto); // Añadir a la lista
    cargarProductos(); // Recargar lista

    document.getElementById("productForm").reset();
    document.querySelector("#addProductModal .btn-close").click();
});

// Eliminar producto
function eliminarProducto(index) {
    productos.splice(index, 1);
    cargarProductos();
}

// Editar producto (Pendiente de implementar)
function editarProducto(index) {
    alert("Función de edición aún no implementada.");
}
