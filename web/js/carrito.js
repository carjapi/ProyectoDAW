document.addEventListener("DOMContentLoaded", function() {
    loadCart();
});

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTableBody = document.getElementById("cartTableBody");
    let cartTotal = 0;
    cartTableBody.innerHTML = "";

    cart.forEach((item, index) => {
        if (!item.nombre || !item.precio || !item.imagen) return; // Evita errores de productos incompletos

        // Eliminar cualquier carácter no numérico y convertir el precio a número
        let precioNumerico = parseFloat(item.precio.toString().replace(/[^0-9,.]/g, '').replace(',', '.')) || 0;
        let totalItemPrice = precioNumerico * item.cantidad;
        cartTotal += totalItemPrice;

        let row = `<tr>
            <td><img src="${item.imagen}" alt="${item.nombre}" style="width: 80px; height: 80px; object-fit: contain;"></td>
            <td>${item.nombre}</td>
            <td>${precioNumerico.toFixed(2)}€</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                ${item.cantidad}
                <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td>${totalItemPrice.toFixed(2)}€</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
            </td>
        </tr>`;

        cartTableBody.innerHTML += row;
    });

    document.getElementById("cartTotal").innerText = cartTotal.toFixed(2);
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].cantidad += change;
    if (cart[index].cantidad <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    alert("Compra realizada con éxito!");
    localStorage.removeItem("cart");
    loadCart();
}
