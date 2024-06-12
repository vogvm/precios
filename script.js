// Lista de códigos y precios
const prendas = {
    "001": 1000,
    "002": 1500,
    "003": 2000,
    "01001": 17000,
    "01002": 17000,
    "01003": 18750,
    "01004": 15000,
    "01005": 16125,
    "01006": 18750,
    "01007": 13250,
    "01008": 13250,
    "01009": 13250,
    "01010": 13250,
    "01011": 19125,
    "01012": 13250,
    "01013": 13250,
    "01014": 15000,
    "01015": 17500,
    "01016": 15750,
    "01017": 15625,
    "01018": 19125,
    "01019": 18125,
    "01020": 15875,
    "01021": 19750,
    "01022": 19750,
    "01023": 19750,
    "01024": 18250,
    "01025": 14625,
    "01026": 18750,
    "01027": 16750,
    "01028": 15625,
    "01029": 25250,
    "01030": 20250,
    "01031": 22500
    // Agrega más prendas aquí
};

// Función para formatear los números
function formatearNumero(numero) {
    return new Intl.NumberFormat('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(numero);
}

function buscarPrecios() {
    const codigo = document.getElementById('codigo').value;
    console.log('Código ingresado:', codigo);  // Verificar el código ingresado
    const precioCredito = prendas[codigo];
    console.log('Precio crédito:', precioCredito);  // Verificar el precio de crédito

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if (precioCredito !== undefined) {
        const precioCuota = (precioCredito / 3).toFixed(2);
        const precioTransferencia = (precioCredito * 0.80).toFixed(2);
        const precioEfectivo = (precioCredito * 0.75).toFixed(2);

        resultadosDiv.innerHTML = `
            <p>Crédito: <strong>$${formatearNumero(precioCredito)}</strong> (3 de <strong>$${precioCuota.replace('.', ',')}</strong>)</p>
            <p>Transferencia/Débito: <strong>$${formatearNumero(precioTransferencia).replace('.', ',')}</strong></p>
            <p>Efectivo: <strong>$${formatearNumero(precioEfectivo).replace('.', ',')}</strong></p>
        `;
    } else {
        resultadosDiv.innerHTML = '<p>Prenda no encontrada</p>';
    }
}
