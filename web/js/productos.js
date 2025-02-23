const ratones = {
    dedos: [
        { nombre: "Ninjutso Sora V2", precio: "144,69€", imagen: "img/ninjutso.png" },
        { nombre: "Lamzu Atlantis OG", precio: "109,90€", imagen: "img/LamzuAtlantis.png" }
    ],
    garra: [
        { nombre: "Lamzu Maya 4K ", precio: "124,90€", imagen: "img/mayax.png" },
        { nombre: "Pulsar Gaming Gears Xlite V3", precio: "109,90€", imagen: "img/pulsar.png" }
    ],
    palma: [
        { nombre: "Fnatic x Lamzu Thorn 4K", precio: "151,77€", imagen: "img/LamzuThorn.png" },
        { nombre: "Razer DeathAdder V3 Pro", precio: "129,99€", imagen: "img/RazerDeath.png" }
    ],
    polivalentes: [
        { nombre: " Razer Viper V3 Pro", precio: "165,99€", imagen: "img/ViperV3.png" },
        { nombre: "Logitech G Pro X Superlight 2", precio: "115,95€", imagen: "img/Gpro2.png" }
    ]
};

let tipoSeleccionado = "dedos";
let indiceActual = 0;

function cargarRatones(tipo) {
    tipoSeleccionado = tipo;
    indiceActual = 0;
    mostrarRaton();
}

function mostrarRaton() {
    const raton = ratones[tipoSeleccionado][indiceActual];
    if (raton) {
        document.getElementById("raton-imagen").src = raton.imagen;
        document.getElementById("raton-nombre").textContent = raton.nombre;
        document.getElementById("raton-precio").textContent = raton.precio;
        document.getElementById("raton-imagen").style.display = "block";
        document.getElementById("btn-agregar").style.display = "block";
    }
}

function cambiarRaton(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) {
        indiceActual = ratones[tipoSeleccionado].length - 1;
    } else if (indiceActual >= ratones[tipoSeleccionado].length) {
        indiceActual = 0;
    }
    mostrarRaton();
}

function agregarAlCarrito() {
    const raton = ratones[tipoSeleccionado][indiceActual];
    alert(`${raton.nombre} ha sido añadido al carrito.`);
}
