const prendas = {
    "001": 1000,
    "002": 1500,
    "003": 2000,
    // Agregar más prendas según sea necesario
};

function buscarPrecios() {
    const codigo = document.getElementById('codigo').value;
    const precioCredito = prendas[codigo];

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if (precioCredito !== undefined) {
        const precioCuota = (precioCredito / 3).toFixed(2);
        const precioTransferencia = (precioCredito * 0.80).toFixed(2);
        const precioEfectivo = (precioCredito * 0.75).toFixed(2);

        resultadosDiv.innerHTML = `
            <p><strong>Precio a crédito:</strong> $${precioCredito} (3 cuotas de $${precioCuota} cada una)</p>
            <p><strong>Precio con transferencia:</strong> $${precioTransferencia}</p>
            <p><strong>Precio en efectivo:</strong> $${precioEfectivo}</p>
        `;
    } else {
        resultadosDiv.innerHTML = '<p>Prenda no encontrada</p>';
    }
}
