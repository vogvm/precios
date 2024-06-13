// Lista de códigos, precios y descripciones
const prendas = {
    "001": { precio: 1000, descripcion: "Prenda 001 - Descripción" },
    "002": { precio: 1500, descripcion: "Prenda 002 - Descripción" },
    "003": { precio: 2000, descripcion: "Prenda 003 - Descripción" },
    "01001": { precio: 17000, descripcion: "Prenda 01001 - Descripción" },
    "01002": { precio: 17000, descripcion: "Prenda 01002 - Descripción" },
    "01003": { precio: 18750, descripcion: "Prenda 01003 - Descripción" },
    "01004": { precio: 15000, descripcion: "Prenda 01004 - Descripción" },
    "01005": { precio: 16125, descripcion: "Prenda 01005 - Descripción" },
    "01006": { precio: 18750, descripcion: "Prenda 01006 - Descripción" },
    "01007": { precio: 13250, descripcion: "Prenda 01007 - Descripción" },
    "01008": { precio: 13250, descripcion: "Prenda 01008 - Descripción" },
    "01009": { precio: 13250, descripcion: "Prenda 01009 - Descripción" },
    "01010": { precio: 13250, descripcion: "Prenda 01010 - Descripción" },
    "01011": { precio: 19125, descripcion: "Prenda 01011 - Descripción" },
    "01012": { precio: 13250, descripcion: "Prenda 01012 - Descripción" },
    "01013": { precio: 13250, descripcion: "Prenda 01013 - Descripción" },
    "01014": { precio: 15000, descripcion: "Prenda 01014 - Descripción" },
    "01015": { precio: 17500, descripcion: "Prenda 01015 - Descripción" },
    "01016": { precio: 15750, descripcion: "Prenda 01016 - Descripción" },
    "01017": { precio: 15625, descripcion: "Prenda 01017 - Descripción" },
    "01018": { precio: 19125, descripcion: "Prenda 01018 - Descripción" },
    "01019": { precio: 18125, descripcion: "Prenda 01019 - Descripción" },
    "01020": { precio: 15875, descripcion: "Prenda 01020 - Descripción" },
    "01021": { precio: 19750, descripcion: "Prenda 01021 - Descripción" },
    "01022": { precio: 19750, descripcion: "Prenda 01022 - Descripción" },
    "01023": { precio: 19750, descripcion: "Prenda 01023 - Descripción" },
    "01024": { precio: 18250, descripcion: "Prenda 01024 - Descripción" },
    "01025": { precio: 14625, descripcion: "Prenda 01025 - Descripción" },
    "01026": { precio: 18750, descripcion: "Prenda 01026 - Descripción" },
    "01027": { precio: 16750, descripcion: "Prenda 01027 - Descripción" },
    "01028": { precio: 15625, descripcion: "Prenda 01028 - Descripción" },
    "01029": { precio: 25250, descripcion: "Prenda 01029 - Descripción" },
    "01030": { precio: 20250, descripcion: "Prenda 01030 - Descripción" },
    "01031": { precio: 22500, descripcion: "Prenda 01031 - Descripción" },
    "02001": { precio: 30000, descripcion: "Prenda 02001 - Descripción" },
    "02002": { precio: 30000, descripcion: "Prenda 02002 - Descripción" },
    "02003": { precio: 30000, descripcion: "Prenda 02003 - Descripción" },
    "02004": { precio: 39750, descripcion: "Prenda 02004 - Descripción" },
    "03001": { precio: 44750, descripcion: "Prenda 03001 - Descripción" },
    "03002": { precio: 30000, descripcion: "Prenda 03002 - Descripción" },
    "03003": { precio: 37500, descripcion: "Prenda 03003 - Descripción" },
    "03004": { precio: 56250, descripcion: "Prenda 03004 - Descripción" },
    "03005": { precio: 31875, descripcion: "Prenda 03005 - Descripción" },
    "03006": { precio: 33000, descripcion: "Prenda 03006 - Descripción" },
    "03007": { precio: 33000, descripcion: "Prenda 03007 - Descripción" },
    "03008": { precio: 47500, descripcion: "Prenda 03008 - Descripción" },
    "03009": { precio: 33000, descripcion: "Prenda 03009 - Descripción" },
    "03010": { precio: 33000, descripcion: "Prenda 03010 - Descripción" },
    "03011": { precio: 40000, descripcion: "Prenda 03011 - Descripción" },
    "03012": { precio: 58750, descripcion: "Prenda 03012 - Descripción" },
    "03013": { precio: 40000, descripcion: "Prenda 03013 - Descripción" },
    "03014": { precio: 57250, descripcion: "Prenda 03014 - Descripción" },
    "03015": { precio: 40000, descripcion: "Prenda 03015 - Descripción" },
    "03016": { precio: 40750, descripcion: "Prenda 03016 - Descripción" },
    "03017": { precio: 66250, descripcion: "Prenda 03017 - Descripción" },
    "03018": { precio: 33750, descripcion: "Prenda 03018 - Descripción" },
    "03019": { precio: 24375, descripcion: "Prenda 03019 - Descripción" },
    "03020": { precio: 29125, descripcion: "Prenda 03020 - Descripción" },
    "03021": { precio: 24375, descripcion: "Prenda 03021 - Descripción" },
    "03022": { precio: 24375, descripcion: "Prenda 03022 - Descripción" },
    "03023": { precio: 42500, descripcion: "Prenda 03023 - Descripción" },
    "03024": { precio: 42500, descripcion: "Prenda 03024 - Descripción" },
    "03025": { precio: 50625, descripcion: "Prenda 03025 - Descripción" },
    "03026": { precio: 33125, descripcion: "Prenda 03026 - Descripción" },
    "03027": { precio: 26500, descripcion: "Prenda 03027 - Descripción" },
    "03028": { precio: 35750, descripcion: "Prenda 03028 - Descripción" },
    "03029": { precio: 37125, descripcion: "Prenda 03029 - Descripción" },
    "03030": { precio: 37375, descripcion: "Prenda 03030 - Descripción" },
    "03031": { precio: 24375, descripcion: "Prenda 03031 - Descripción" },
    "04001": { precio: 40000, descripcion: "Prenda 04001 - Descripción" },
    "04002": { precio: 43750, descripcion: "Prenda 04002 - Descripción" },
    "04003": { precio: 37500, descripcion: "Prenda 04003 - Descripción" },
    "04004": { precio: 30000, descripcion: "Prenda 04004 - Descripción" },
    "04005": { precio: 33125, descripcion: "Prenda 04005 - Descripción" },
    "04006": { precio: 34375, descripcion: "Prenda 04006 - Descripción" },
    "04007": { precio: 33750, descripcion: "Prenda 04007 - Descripción" },
    "04008": { precio: 43750, descripcion: "Prenda 04008 - Descripción" },
    "04009": { precio: 43750, descripcion: "Prenda 04009 - Descripción" },
    "04010": { precio: 37500, descripcion: "Prenda 04010 - Descripción" },
    "04011": { precio: 31250, descripcion: "Prenda 04011 - Descripción" },
    "04012": { precio: 25625, descripcion: "Prenda 04012 - Descripción" },
    "04013": { precio: 37500, descripcion: "Prenda 04013 - Descripción" },
    "04014": { precio: 33750, descripcion: "Prenda 04014 - Descripción" },
    "04015": { precio: 37500, descripcion: "Prenda 04015 - Descripción" },
    "04016": { precio: 33125, descripcion: "Prenda 04016 - Descripción" },
    "04017": { precio: 40000, descripcion: "Prenda 04017 - Descripción" },
    "04018": { precio: 46250, descripcion: "Prenda 04018 - Descripción" },
    "04019": { precio: 37500, descripcion: "Prenda 04019 - Descripción" },
    "04020": { precio: 33125, descripcion: "Prenda 04020 - Descripción" },
    "04021": { precio: 26875, descripcion: "Prenda 04021 - Descripción" },
    "04022": { precio: 33125, descripcion: "Prenda 04022 - Descripción" },
    "04023": { precio: 37500, descripcion: "Prenda 04023 - Descripción" },
    "04024": { precio: 30000, descripcion: "Prenda 04024 - Descripción" },
    "04025": { precio: 37500, descripcion: "Prenda 04025 - Descripción" },
    "04026": { precio: 27500, descripcion: "Prenda 04026 - Descripción" },
    "04027": { precio: 46250, descripcion: "Prenda 04027 - Descripción" },
    "04028": { precio: 43750, descripcion: "Prenda 04028 - Descripción" },
    "04029": { precio: 31250, descripcion: "Prenda 04029 - Descripción" },
    "04030": { precio: 38750, descripcion: "Prenda 04030 - Descripción" },
    "04031": { precio: 40625, descripcion: "Prenda 04031 - Descripción" },
    "05001": { precio: 33125, descripcion: "Prenda 05001 - Descripción" },
    "05002": { precio: 30000, descripcion: "Prenda 05002 - Descripción" },
    "05003": { precio: 28750, descripcion: "Prenda 05003 - Descripción" },
    "05004": { precio: 25625, descripcion: "Prenda 05004 - Descripción" },
    "05005": { precio: 31875, descripcion: "Prenda 05005 - Descripción" },
    "05006": { precio: 31875, descripcion: "Prenda 05006 - Descripción" },
    "05007": { precio: 25625, descripcion: "Prenda 05007 - Descripción" },
    "05008": { precio: 31875, descripcion: "Prenda 05008 - Descripción" },
    "05009": { precio: 29375, descripcion: "Prenda 05009 - Descripción" },
    "05010": { precio: 28750, descripcion: "Prenda 05010 - Descripción" },
    "05011": { precio: 21875, descripcion: "Prenda 05011 - Descripción" },
    "05012": { precio: 38750, descripcion: "Prenda 05012 - Descripción" },
    "05013": { precio: 34375, descripcion: "Prenda 05013 - Descripción" },
    "05014": { precio: 21875, descripcion: "Prenda 05014 - Descripción" },
    "05015": { precio: 29375, descripcion: "Prenda 05015 - Descripción" },
    "05016": { precio: 29375, descripcion: "Prenda 05016 - Descripción" },
    "05017": { precio: 38750, descripcion: "Prenda 05017 - Descripción" },
    "05018": { precio: 33750, descripcion: "Prenda 05018 - Descripción" },
    "05019": { precio: 24375, descripcion: "Prenda 05019 - Descripción" },
    "05020": { precio: 26875, descripcion: "Prenda 05020 - Descripción" },
    "05021": { precio: 29375, descripcion: "Prenda 05021 - Descripción" },
    "05022": { precio: 31250, descripcion: "Prenda 05022 - Descripción" },
    "05023": { precio: 31875, descripcion: "Prenda 05023 - Descripción" },
    "05024": { precio: 35625, descripcion: "Prenda 05024 - Descripción" },
    "05025": { precio: 28750, descripcion: "Prenda 05025 - Descripción" },
    "05026": { precio: 33750, descripcion: "Prenda 05026 - Descripción" },
    "05027": { precio: 30000, descripcion: "Prenda 05027 - Descripción" },
    "05028": { precio: 28750, descripcion: "Prenda 05028 - Descripción" },
    "05029": { precio: 21875, descripcion: "Prenda 05029 - Descripción" },
    "05030": { precio: 33750, descripcion: "Prenda 05030 - Descripción" },
    "05031": { precio: 26875, descripcion: "Prenda 05031 - Descripción" },
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
        const precioCuota = (precioCredito / 3).toFixed(2);
        const precioTransferencia = (precioCredito * 0.80).toFixed(2);
        const precioEfectivo = (precioCredito * 0.75).toFixed(2);

        resultadosDiv.innerHTML = `
            <p>${descripcion}</p>
            <p>Crédito: <strong>$${formatearNumero(precioCredito)}</strong><br>(3 de <strong>$${formatearNumero(precioCuota).replace('.', ',')}</strong>)</p>
            <p>Transferencia/Débito: <strong>$${formatearNumero(precioTransferencia).replace('.', ',')}</strong></p>
            <p>Efectivo: <strong>$${formatearNumero(precioEfectivo).replace('.', ',')}</strong></p>
        `;
    } else {
        resultadosDiv.innerHTML = '<p>Prenda no encontrada</p>';
    }
}
