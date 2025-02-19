class Cabecera extends HTMLElement {
    constructor() {
        super();

        // Ajustar basePath dependiendo si estamos en admin o en web
        let basePath = window.location.pathname.includes("admin") ? "../web/" : "";

        // Esperar a que el localStorage esté completamente cargado
        document.addEventListener("DOMContentLoaded", function () {
            let role = localStorage.getItem("userRole") || "invitado";
            let userPage = `${basePath}login.html`; // Por defecto, ir a login si no hay sesión

            if (role === "admin") {
                userPage = "../admin/admin.html";
            } else if (role === "usuario") {
                userPage = `${basePath}perfil.html`;
            }

            // Renderizar el menú
            document.querySelector("mi-header").innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: fixed; width:100%; top:0; padding: 30px;">
                    <div class="container">
                        <!-- Logo -->
                        <a class="navbar-brand" href="${basePath}index.html">
                            <img src="${basePath}img/GGMOUSE3.png" alt="GGMouse Logo" class="logo">
                        </a>                

                        <!-- Botón de menú para móviles -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Menú de navegación -->
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="menuDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fas fa-bars"></i> 
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="menuDropdown">
                                        <li><a class="dropdown-item" href="${basePath}index.html"><i class="fas fa-home"></i> Inicio</a></li>
                                        <li><a class="dropdown-item" href="${basePath}empresa.html"><i class="fas fa-building"></i> Empresa</a></li>
                                        <li><a class="dropdown-item" href="${basePath}productos.html"><i class="fas fa-mouse"></i> Productos</a></li>
                                        <li><a class="dropdown-item" href="${basePath}contacto.html"><i class="fas fa-envelope"></i> Contacto</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <!-- Iconos de Usuario y Carrito -->
                        <div class="d-flex">
                            <a href="${userPage}" class="user-icon me-3">
                                <i class="fas fa-user"></i>
                            </a>
                            <a href="${basePath}carrito.html" class="cart-icon">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                </nav>
            `;
        });
    }
}

// Definir el componente personalizado
window.customElements.define('mi-header', Cabecera);
