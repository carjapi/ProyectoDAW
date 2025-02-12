document.addEventListener("DOMContentLoaded", function () {
    // Cargar el header (menú de navegación)
    document.getElementById("header").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: fixed; width:100%; top:0; padding: 30px;">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="img/GGMOUSE3.png" alt="GGMouse Logo" class="logo">
                </a>                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                        <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
                        <li class="nav-item"><a class="nav-link" href="empresa.html">Empresa</a></li>
                    </ul>
                </div>
                <a href="#" class="user-icon" onclick="checkUserRole()">
                    <i class="fas fa-user"></i>
                </a>
                <a href="carrito.html" class="cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </div>
        </nav>
    `;

    // Cargar el footer
    document.getElementById("footer").innerHTML = `
        <footer class="bg-dark text-white text-center py-3">
            <p>&copy; 2024 GGMouse | Contacto: info@ggmouse.com</p>
            <div class="footer-icons">
                <a href="https://twitter.com" target="_blank"><i class="fab fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
            </div>
        </footer>
    `;
});

// Función para redirigir según el rol del usuario
function checkUserRole() {
    const role = localStorage.getItem("userRole");

    if (role === "admin") {
        window.location.href = "admin.html"; // Redirigir al panel de administración
    } else if (role === "usuario") {
        window.location.href = "perfil.html"; // Redirigir a la página de perfil del usuario
    } else {
        window.location.href = "login.html"; // Si no ha iniciado sesión, lo manda al login
    }
}
