document.addEventListener("DOMContentLoaded", function () {
    cargarPedidos();
});

// Datos de ejemplo en `localStorage` si no existen
if (!localStorage.getItem("pedidos")) {
    localStorage.setItem("pedidos", JSON.stringify([
        {
            id: 1,
            productos: [
                { nombre: "Ninjutso Sora V2", cantidad: 1, precio: 144.69 },
                { nombre: "Lamzu Atlantis OG", cantidad: 1, precio: 109.90 }
            ],
            fecha: "2024-06-05"
        },
        {
            id: 2,
            productos: [
                { nombre: "Lamzu Atlantis OG", cantidad: 2, precio: 109.90 }
            ],
            fecha: "2024-06-06"
        }
    ]));
}
function cargarPedidos() {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    let ordersTableBody = document.getElementById("ordersTableBody");
    ordersTableBody.innerHTML = "";

    pedidos.forEach((pedido, index) => {
        if (!pedido.productos || !Array.isArray(pedido.productos)) {
            console.warn(`Pedido sin productos encontrado: `, pedido);
            return;
        }

        let totalPedido = pedido.productos.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);

        let productosHTML = pedido.productos.map(prod => 
            `${prod.nombre} (x${prod.cantidad}) - ${prod.precio.toFixed(2)} €`
        ).join("<br>");
        

        let row = `<tr>
            <td>#${pedido.id}</td>
            <td>${productosHTML}</td>
            <td>${totalPedido.toFixed(2)} €</td>
            <td>${pedido.fecha}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="cancelarPedido(${index})">Cancelar Pedido</button>
            </td>
        </tr>`;
    
        ordersTableBody.innerHTML += row;
    });
}


function cancelarPedido(index) {
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    if (confirm("¿Seguro que quieres cancelar este pedido?")) {
        pedidos.splice(index, 1);
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
        cargarPedidos();
    }
}
