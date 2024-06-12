let prendas = {};

// Cargar los datos desde el archivo JSON
fetch('precios.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        prendas = data;
        console.log('Datos cargados:', prendas);  // Verificar que los datos se hayan cargado
    })
    .catch(error => console.error('Error al cargar los datos:', error));

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
            <p>Crédito: <strong>$${formatearNumero(precioCredito)}</strong> (3 cuotas de <strong>$${precioCuota.replace('.', ',')}</strong>)</p>
            <p>Transferencia/Débito: <strong>$${formatearNumero(precioTransferencia).replace('.', ',')}</strong></p>
            <p>Efectivo: <strong>$${formatearNumero(precioEfectivo).replace('.', ',')}</strong></p>
        `;
    } else {
        resultadosDiv.innerHTML = '<p>Prenda no encontrada</p>';
    }
}
