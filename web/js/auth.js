function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Email ingresado:", email);
    console.log("Password ingresado:", password);

    if (!email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const users = [
        { email: "admin@ggmouse.com", password: "admin123", role: "admin" },
        { email: "usuario@ggmouse.com", password: "user123", role: "usuario" }
    ];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        console.log("Usuario encontrado:", user);
        localStorage.setItem("userRole", user.role);
        localStorage.setItem("userEmail", user.email);

        alert("Inicio de sesión exitoso");
        window.location.href = "index.html";
    } else {
        console.log("Usuario no encontrado o credenciales incorrectas");
        alert("Correo o contraseña incorrectos.");
    }
}
