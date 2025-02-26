// Lista de pedidos precargados
let pedidos = [
    { id: 1, cliente: "Matias López", producto: "Lamzu Atlantis OG", cantidad: 2, precio: 109.90, estado: "Pendiente" },
    { id: 2, cliente: "Pablo Moncho", producto: "Razer DeathAdder V3 Pro", cantidad: 1, precio: 129.99, estado: "Pendiente" }
];

document.addEventListener("DOMContentLoaded", function() {
    cargarPedidos();
});

function cargarPedidos() {
    let tablaPedidos = document.getElementById("tablaPedidos");
    tablaPedidos.innerHTML = ""; // Limpiar

    pedidos.forEach((pedido, index) => {
        let fila = `<tr>
            <td>${pedido.id}</td>
            <td>${pedido.cliente}</td>
            <td>${pedido.producto}</td>
            <td>${pedido.cantidad}</td>
            <td>${(pedido.precio * pedido.cantidad).toFixed(2)} €</td>
            <td><span class="badge ${pedido.estado === "Pendiente" ? "bg-warning" : "bg-success"}">${pedido.estado}</span></td>
            <td>
                <button class="btn btn-sm btn-success" onclick="marcarCompletado(${index})">Completar</button>
                <button class="btn btn-sm btn-danger" onclick="eliminarPedido(${index})">Eliminar</button>
            </td>
        </tr>`;
        
        tablaPedidos.innerHTML += fila;
    });
}

function marcarCompletado(index) {
    pedidos[index].estado = "Completado";
    cargarPedidos();
}

function eliminarPedido(index) {
    pedidos.splice(index, 1);
    cargarPedidos();
}

function filtrarPedidos() {
    let filtro = document.getElementById("buscarPedido").value.toLowerCase();
    let filas = document.querySelectorAll("#tablaPedidos tr");

    filas.forEach(fila => {
        let textoFila = fila.innerText.toLowerCase();
        fila.style.display = textoFila.includes(filtro) ? "" : "none";
    });
}
