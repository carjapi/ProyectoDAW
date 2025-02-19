class PiePagina extends HTMLElement {
    constructor() {
        super();
        
        // Asegurar que el DOM está completamente cargado antes de ejecutar
        document.addEventListener("DOMContentLoaded", () => {
            let basePath = window.location.pathname.includes("admin") ? "../web/" : "";

            this.innerHTML = `
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
    }
}

// Registrar el elemento personalizado
window.customElements.define('mi-footer', PiePagina);
