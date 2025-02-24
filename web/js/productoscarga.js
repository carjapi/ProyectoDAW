document.addEventListener("DOMContentLoaded", function() {
});

function cargarRatones(tipo) {
    let carouselContainer = document.getElementById("carousel-container");
    carouselContainer.innerHTML = "";

    if (!ratones[tipo]) return;

    ratones[tipo].forEach(producto => {
        let slide = `<div class="swiper-slide">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-5 text-center">
                                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded shadow" style="width: 350px; height: 350px; object-fit: contain;">
                            </div>
                            <div class="col-md-5 text-start">
                                <h3 class="fw-semibold">${producto.nombre}</h3>
                                <p class="text-muted">${producto.descripcion || "Ratón gaming de alto rendimiento."}</p>
                                <p class="fw-bold">Precio: ${producto.precio}</p>
                                <button class="btn btn-success mt-3" onclick="agregarAlCarrito('${producto.nombre}', '${producto.precio}', '${producto.imagen}')">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>`;
        carouselContainer.innerHTML += slide;
    });

    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        effect: "slide",
        slidesPerView: 1,
    });
}

function agregarAlCarrito(nombre, precio, imagen) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productoExistente = cart.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        cart.push({ nombre, precio, imagen, cantidad: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${nombre} ha sido añadido al carrito.`);
}
