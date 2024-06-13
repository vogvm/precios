const prendas = {
    "001": { precio: 1000, descripcion: "Prenda 001 - Descripción" },
    "002": { precio: 1500, descripcion: "Prenda 002 - Descripción" },
    "003": { precio: 2000, descripcion: "Prenda 003 - Descripción" },
    "01001": { precio: 17000, descripcion: "Prenda 01001 - Descripción" },
    "01002": { precio: 17000, descripcion: "Prenda 01002 - Descripción" },
    "01003": { precio: 18750, descripcion: "Prenda 01003 - Descripción" },
    // ...agregar más prendas según sea necesario
};

// Función para formatear los números
function formatearNumero(numero) {
    return new Intl.NumberFormat('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(numero);
}

function buscarPrecios() {
    const codigo = document.getElementById('codigo').value;
    const prenda = prendas[codigo];

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if (prenda) {
        const precioCredito = prenda.precio;
        const descripcion = prenda.descripcion;
        const precioCuota = (precioCredito / 3).toFixed(2).replace('.', ',');
        const precioTransferencia = formatearNumero((precioCredito * 0.80).toFixed(2));
        const precioEfectivo = formatearNumero((precioCredito * 0.75).toFixed(2));

        resultadosDiv.innerHTML = `
            <p>${descripcion}</p>
            <div class="credito">
                <p>Crédito: <strong>$${formatearNumero(precioCredito)}</strong></p>
                <p class="cuota"><strong>3 de $${precioCuota}</strong></p>
            </div>
            <p>Transferencia/Débito: <strong>$${precioTransferencia}</strong></p>
            <p>Efectivo: <strong>$${precioEfectivo}</strong></p>
        `;
    } else {
        resultadosDiv.innerHTML = '<p>Prenda no encontrada</p>';
    }
}
