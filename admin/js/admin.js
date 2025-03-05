function logout() {
    // Elimina todos los datos de la sesión en localStorage
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");

    // Evitar que el usuario vuelva atrás en la sesión
    window.location.href = "../web/login.html"; 
    setTimeout(() => {
        window.location.replace("../web/login.html"); // Reemplaza la sesión para evitar "atrás"
    }, 100);
}