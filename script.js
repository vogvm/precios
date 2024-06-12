let prendas = {};

// Cargar los datos desde el archivo JSON
fetch('precios.json')
    .then(response => response.json())
    .then(data => {
        prendas = data;
    })
    .catch(error => console.error('Error al cargar los datos:', error));

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
