document.addEventListener("DOMContentLoaded", function () {
    let basePath = window.location.pathname.includes("admin") ? "../web/" : "";    
    // Cargar el header (menú de navegación)
    document.getElementById("header").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: fixed; width:100%; top:0; padding: 30px;">
        <div class="container">
            <!-- Logo -->
            <a class="navbar-brand" href="index.html">
                <img src="img/GGMOUSE3.png" alt="GGMouse Logo" class="logo">
            </a>                

            <!-- Botón de menú para móviles -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Menú de navegación -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <!-- Menú desplegable de Navegación -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="menuDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-bars"></i> 
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="menuDropdown">
                        <li><a class="dropdown-item" href="index.html"><i class="fas fa-home"></i> Inicio</a></li>
                        <li><a class="dropdown-item" href="empresa.html"><i class="fas fa-building"></i> Empresa</a></li>
                        <li><a class="dropdown-item" href="productos.html"><i class="fas fa-mouse"></i> Productos</a></li>
                        <li><a class="dropdown-item" href="contacto.html"><i class="fas fa-envelope"></i> Contacto</a></li>
                    </ul>
                </li>
                </ul>
            </div>

            <!-- Iconos de Usuario y Carrito -->
            <div class="d-flex">
                <a href="perfil.html" class="user-icon me-3">
                    <i class="fas fa-user"></i>
                </a>
                <a href="carrito.html" class="cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </div>
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
        window.location.href = "../admin/admin.html"; // Redirigir al panel de administración
    } else if (role === "usuario") {
        window.location.href = "../web/perfil.html"; // Redirigir a la página de perfil del usuario
    } else {
        window.location.href = "../web/login.html"; // Si no ha iniciado sesión, lo manda al login
    }
}
