const prendas = {
    "001": { precio: 1000, descripcion: "Prenda 001 - Descripción" },
    "01001": { precio: 17000, descripcion: "Clásica c/est. Bross" },
    "01002": { precio: 17000, descripcion: "Clásica c/est. Bross" },
    "01003": { precio: 18750, descripcion: "Clásica c/est. Cara Cruz" },
    "01004": { precio: 15000, descripcion: "Clásica c/est. Jetlac" },
    "01005": { precio: 16125, descripcion: "Clásica c/est. Vancouver" },
    "01006": { precio: 18750, descripcion: "Clásica c/est. Cara Cruz" },
    "01007": { precio: 13250, descripcion: "Clásica c/est. Cuarto" },
    "01008": { precio: 13250, descripcion: "Clásica lisa Dogma" },
    "01009": { precio: 13250, descripcion: "Clásica lisa Jetlac" },
    "01010": { precio: 13250, descripcion: "Clásica lisa Cara Cruz" },
    "01011": { precio: 19125, descripcion: "Over Vancouver" },
    "01012": { precio: 13250, descripcion: "Over Original" },
    "01013": { precio: 13250, descripcion: "Over Hong Kong" },
    "01014": { precio: 15000, descripcion: "Over Jetlac" },
    "01015": { precio: 17500, descripcion: "Over Bascope" },
    "01016": { precio: 15750, descripcion: "Over De los Cojones" },
    "01017": { precio: 15625, descripcion: "Over Cara Cruz" },
    "01018": { precio: 19125, descripcion: "Over Bross" },
    "01019": { precio: 18125, descripcion: "Over Bross lisa" },
    "01020": { precio: 15875, descripcion: "Over Bross" },
    "01021": { precio: 19750, descripcion: "Clásica Cara Cruz" },
    "01022": { precio: 19750, descripcion: "Over Cara Cruz" },
    "01023": { precio: 19750, descripcion: "Over Cara Cruz" },
    "01024": { precio: 18250, descripcion: "Clásica Vancouver flame" },
    "01025": { precio: 14625, descripcion: "Clásica Tukson" },
    "01026": { precio: 18750, descripcion: "Clásica c/est. Bross" },
    "01027": { precio: 16750, descripcion: "Clásica lisa Bross" },
    "01028": { precio: 15625, descripcion: "Clasica SKR" },
    "01029": { precio: 25250, descripcion: "Over Vancouver ACID" },
    "01030": { precio: 20250, descripcion: "Clasica Vancouver TECH" },
    "01031": { precio: 22500, descripcion: "Over Bross" },
    "02001": { precio: 30000, descripcion: "Vestir Tukson manga L" },
    "02002": { precio: 30000, descripcion: "Jeans Tukson manga L" },
    "02003": { precio: 30000, descripcion: "Leñadoras Tukson manga L" },
    "02004": { precio: 39750, descripcion: "Vestir Cara Cruz manga L" },
    "03001": { precio: 44750, descripcion: "Cargo recto Fusston arena" },
    "03002": { precio: 30000, descripcion: "Cargo jeans Fusston" },
    "03003": { precio: 37500, descripcion: "Jogger gabar cargo Tukson" },
    "03004": { precio: 56250, descripcion: "Jogger gabar cargo Importado" },
    "03005": { precio: 31875, descripcion: "Cargo c/rot.Hong Kong gris" },
    "03006": { precio: 33000, descripcion: "Jeans chupin Fusston" },
    "03007": { precio: 33000, descripcion: "Jeans chupin Fusston c/rot." },
    "03008": { precio: 47500, descripcion: "Jeans chupin Cara Cruz" },
    "03009": { precio: 33000, descripcion: "Jeans chupin Tukson" },
    "03010": { precio: 33000, descripcion: "Jeans chupin Usina 77 c/rot" },
    "03011": { precio: 40000, descripcion: "Jeans recto Tukson azul" },
    "03012": { precio: 58750, descripcion: "Jeans recto Cara Cruz" },
    "03013": { precio: 40000, descripcion: "Jeans recto Fusston c/rotura" },
    "03014": { precio: 57250, descripcion: "Jeans recto mom Vancouver" },
    "03015": { precio: 40000, descripcion: "Jeans recto Fusston" },
    "03016": { precio: 40750, descripcion: "Corte chino Fusston" },
    "03017": { precio: 66250, descripcion: "Cargos Marron Cara Cruz" },
    "03018": { precio: 33750, descripcion: "Babucha algodón SKR" },
    "03019": { precio: 40000, descripcion: "Joggin Handsome" },
    "03020": { precio: 52500, descripcion: "Jean Bascope" },
    "03021": { precio: 0, descripcion: "Bermu jeans elasti Sodio" },
    "03022": { precio: 0, descripcion: "Bermu jeans chupin Fusston c/rot" },
    "03023": { precio: 40000, descripcion: "Jeans jogger Hong Kong c/rot" },
    "03024": { precio: 40000, descripcion: "Jeans jogger Fusston c/rot" },
    "03025": { precio: 50625, descripcion: "Jeans jogger Cara Crus c/rot" },
    "03026": { precio: 0, descripcion: "Bermuda vestir Cara Cruz verde" },
    "03027": { precio: 0, descripcion: "Bermuda chino Fusston" },
    "03028": { precio: 0, descripcion: "Bermu jeans mon Cara Cruz" },
    "03029": { precio: 0, descripcion: "Bermu jeans mon Vancouver c/rot" },
    "03030": { precio: 0, descripcion: "Bermu cargo Vancouver" },
    "03031": { precio: 0, descripcion: "Bermu jeans chupin Cara Cruz" },
    "04001": { precio: 40000, descripcion: "Rústico Tukson c/capucha" },
    "04002": { precio: 43750, descripcion: "Rústico Tukson c/capucha" },
    "04003": { precio: 37500, descripcion: "Liviano Cara Cruz" },
    "04004": { precio: 30000, descripcion: "Bascope" },
    "04005": { precio: 48750, descripcion: "Bascope c/capucha" },
    "04006": { precio: 30000, descripcion: "Rústico Dogma" },
    "04007": { precio: 25000, descripcion: "Sueter Guafle" },
    "04008": { precio: 53750, descripcion: "Vancouver Basic/Medium" },
    "04009": { precio: 48750, descripcion: "Vancouver Basic/Medium" },
    "04010": { precio: 48750, descripcion: "Bascope" },
    "04011": { precio: 40000, descripcion: "Plush Cara Cruz" },
    "04012": { precio: 49125, descripcion: "Bross canguro" },
    "04013": { precio: 46250, descripcion: "Bross cinta" },
    "04014": { precio: 69000, descripcion: "Bross canguro over" },
    "04015": { precio: 47500, descripcion: "Sweters SKR" },
    "04016": { precio: 43750, descripcion: "Bross básico" },
    "04017": { precio: 53000, descripcion: "Sweters Bross" },
    "04018": { precio: 43750, descripcion: "Buzo con capucha Rolly Go" },
    "05001": { precio: 24375, descripcion: "Algodón Vancouver" },
    "05002": { precio: 31500, descripcion: "Algodón Cara Cruz" },
    "05003": { precio: 24375, descripcion: "Piqué Bross" },
    "05004": { precio: 24375, descripcion: "Algodón Bross" },
    "06001": { precio: 36250, descripcion: "Algodón Dogma c/friza" },
    "06002": { precio: 50000, descripcion: "Plush Cara Cruz" },
    "06003": { precio: 61875, descripcion: "Alcolchada Cara Cruz" },
    "06004": { precio: 43750, descripcion: "Rústica Cara Cruz" },
    "06005": { precio: 34875, descripcion: "Rústica Tukson" },
    "06006": { precio: 56250, descripcion: "Universitaria Cara Cruz" },
    "06007": { precio: 33750, descripcion: "Algodón SKR" },
    "06008": { precio: 43000, descripcion: "Algodón SKR c/estampa" },
    "06009": { precio: 47250, descripcion: "Algodón SKR tejida" },
    "06010": { precio: 44000, descripcion: "Algodón Cara Cruz" },
    "06011": { precio: 56250, descripcion: "Bengalina Cara Cruz" },
    "06012": { precio: 80000, descripcion: "Chaleco SKR abrigo" },
    "06013": { precio: 90000, descripcion: "Puffer engo.Handsome" },
    "06014": { precio: 81250, descripcion: "Puffer Handsome verde" },
    "06015": { precio: 87500, descripcion: "Puffer Handsome gris" },
    "06016": { precio: 36250, descripcion: "Rústica Bascope" },
    "06017": { precio: 75000, descripcion: "Eco cuero" },
    "06018": { precio: 56250, descripcion: "Camisaco corderoy Hands" },
    "06019": { precio: 62500, descripcion: "Camisaco paño" },
    "06020": { precio: 111250, descripcion: "Conjunto Neoprene" },
    "07001": { precio: 17000, descripcion: "Perfume Tukson" },
    "07002": { precio: 11875, descripcion: "Gorra Vancouver" },
    "07003": { precio: 21250, descripcion: "Perfume Cara Cruz" },
    "07004": { precio: 26500, descripcion: "Perfume Bross London" },
    "07005": { precio: 18000, descripcion: "Gorro lana" },
    "07006": { precio: 18000, descripcion: "Bufanda/cuello" },
    "07007": { precio: 17500, descripcion: "Gorra gastada" },
    "08001": { precio: 18625, descripcion: "Cinto Punta&Taco Negro" },
    "08002": { precio: 0, descripcion: "-" },
    "08003": { precio: 0, descripcion: "-" },
    "08004": { precio: 0, descripcion: "-" },
    "08005": { precio: 25000, descripcion: "Billetera con cierre" },
    "08006": { precio: 19375, descripcion: "Billetera Punta&Taco" },
    "08007": { precio: 11875, descripcion: "Billetera Punta&Taco c/recorte" },
    "08008": { precio: 18625, descripcion: "Cinto Bross" },
    "08009": { precio: 22500, descripcion: "Riñonera PU Bross" },
    "09001": { precio: 4900, descripcion: "Media Bross" },
    "09002": { precio: 4300, descripcion: "Soquete clásico Bross" },
    "09003": { precio: 3750, descripcion: "Soquete invisible Bross" },
    "09004": { precio: 10125, descripcion: "Soquete invisible Bross pack/3" },
    "09005": { precio: 13250, descripcion: "Boxer XY liso" },
    "09006": { precio: 14750, descripcion: "Boxer XY estampado" },
    "09007": { precio: 3750, descripcion: "Media clásica Elemento" },
    "09008": { precio: 13250, descripcion: "Slip XY" },
    "10001": { precio: 44500, descripcion: "Zapas Recife Roma B." },
    "10002": { precio: 44500, descripcion: "Zapas Recife Roma N." },
    "10003": { precio: 44500, descripcion: "Zapas Recife Roma N.car." },
    "10004": { precio: 44500, descripcion: "Zapas Recife Roma A.car." },
    "10005": { precio: 44500, descripcion: "Zapas Recife Roma R.car." },
    "10006": { precio: 44500, descripcion: "Zapas Recife Granada N.car." },
    "10007": { precio: 58500, descripcion: "Zapas Recife Marbella G." },
    "10008": { precio: 58500, descripcion: "Zapas Recife Marbella V." },
    "10009": { precio: 58500, descripcion: "Zapas Recife Marbella B." },
    "11001": { precio: 30750, descripcion: "Mate Imperial c/alpaca" },
    "11002": { precio: 21250, descripcion: "Mate camionero c/acero" },
    "11003": { precio: 13250, descripcion: "Mate c/aluminio" },
    "11004": { precio: 13250, descripcion: "Mate torpedo c/aluminio" },
    "11005": { precio: 22500, descripcion: "Termo acero de 1 lt." },
    "11006": { precio: 8500, descripcion: "Yerbero de cuero" },
    "11007": { precio: 7500, descripcion: "Despolvilladores" },
    "11008": { precio: 4250, descripcion: "Bombilla brasilera" },
    "11009": { precio: 5000, descripcion: "Bombilla lisa" },
    "11010": { precio: 5500, descripcion: "Bombilla torneada" },
    "11011": { precio: 18625, descripcion: "Canasta" }
    // ...agregar más prendas según sea necesario
    };

// Obtener la fecha y hora de la última actualización del script
document.getElementById('ultima-actualizacion').textContent = `Última actualización: ${document.lastModified}`;

function formatearNumero(numero) {
    return new Intl.NumberFormat('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numero);
}

function buscarPrecios(codigo = null) {
    codigo = codigo || document.getElementById('codigo').value;
    const prenda = prendas[codigo];

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if (prenda) {
        const precioCredito = prenda.precio;
        const descripcion = prenda.descripcion;
        const precioCuota = precioCredito / 3;
        const precioCuota1 = precioCredito / 6;
        const precioTransferencia = precioCredito * 0.80;
        const precioEfectivo = precioCredito * 0.75;

        resultadosDiv.innerHTML = `
            <p class="descripcion">${descripcion}</p>
            <div class="precio-item">
                <span>Crédito:</span>
                <span><strong> $${formatearNumero(precioCredito)} </strong></span>
            </div>
            <div class="precio-item">
                <span></span>
                <span>3 de <strong>$${formatearNumero(precioCuota)}</strong></span>
            </div>
            <div class="precio-item">
                <span></span>
                <span>6 de <strong>$${formatearNumero(precioCuota1)}</strong></span>
            </div>
            <div class="precio-item">
                <span>Transferencia/Débito:</span>
                <span><strong>$${formatearNumero(precioTransferencia)}</strong></span>
            </div>
            <div class="precio-item">
                <span>Efectivo:</span>
                <span><strong>$${formatearNumero(precioEfectivo)}</strong></span>
            </div>
        `;

        agregarAlHistorial(codigo, descripcion, precioCredito, precioTransferencia, precioEfectivo);
    } else {
        resultadosDiv.innerHTML = '<p>Prenda no encontrada</p>';
    }
}

function agregarAlHistorial(codigo, descripcion, precioCredito, precioTransferencia, precioEfectivo) {
    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.unshift({ codigo, descripcion, precioCredito, precioTransferencia, precioEfectivo });
    localStorage.setItem('historial', JSON.stringify(historial));
    mostrarHistorial();
}

function mostrarHistorial() {
    const historialDiv = document.getElementById('historial');
    historialDiv.innerHTML = '';

    const historial = JSON.parse(localStorage.getItem('historial')) || [];

    historial.forEach(item => {
        const codigoLink = document.createElement('a');
        codigoLink.href = '#';
        codigoLink.textContent = `${item.codigo}: ${item.descripcion}`;
        codigoLink.onclick = () => {
            document.getElementById('codigo').value = item.codigo;
            buscarPrecios(item.codigo);
        };
        historialDiv.appendChild(codigoLink);

        const precios = document.createElement('p');
        precios.innerHTML = `
            <strong>Crédito:</strong> $${formatearNumero(item.precioCredito)} 
            <strong>-20%:</strong> $${formatearNumero(item.precioTransferencia)} 
            <strong>-25%:</strong> $${formatearNumero(item.precioEfectivo)}
        `;
        historialDiv.appendChild(precios);

        historialDiv.appendChild(document.createElement('br'));
    });
}

function limpiarHistorial() {
    localStorage.removeItem('historial');
    mostrarHistorial();
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarHistorial();
    mostrarTodosLosProductos();
});

function toggleMenu() {
    const menu = document.getElementById('menuDesplegable');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
}

function mostrarTodosLosProductos() {
    const menuDesplegable = document.getElementById('menuDesplegable');
    menuDesplegable.innerHTML = '';

    Object.keys(prendas).forEach(codigo => {
        const prenda = prendas[codigo];
        const precioCredito = prenda.precio;
        const descripcion = prenda.descripcion;
        const precioTransferencia = precioCredito * 0.80;
        const precioEfectivo = precioCredito * 0.75;

        const codigoLink = document.createElement('a');
        codigoLink.href = '#';
        codigoLink.textContent = `${codigo}: ${descripcion}`;
        codigoLink.onclick = () => {
            document.getElementById('codigo').value = codigo;
            buscarPrecios(codigo);
        };
        menuDesplegable.appendChild(codigoLink);

        const precios = document.createElement('p');
        precios.innerHTML = `
            <strong>Crédito:</strong> $${formatearNumero(precioCredito)} 
            <strong>-20%:</strong> $${formatearNumero(precioTransferencia)} 
            <strong>-25%:</strong> $${formatearNumero(precioEfectivo)}
        `;
        menuDesplegable.appendChild(precios);

        menuDesplegable.appendChild(document.createElement('br'));
    });
}

function filtrarProductos() {
    const categoria = document.getElementById('categoria').value;
    const menuDesplegable = document.getElementById('menuDesplegable');
    menuDesplegable.innerHTML = '';

    Object.keys(prendas).forEach(codigo => {
        if (categoria === 'all' || codigo.startsWith(categoria)) {
            const prenda = prendas[codigo];
            const precioCredito = prenda.precio;
            const descripcion = prenda.descripcion;
            const precioTransferencia = precioCredito * 0.80;
            const precioEfectivo = precioCredito * 0.75;

            const codigoLink = document.createElement('a');
            codigoLink.href = '#';
            codigoLink.textContent = `${codigo}: ${descripcion}`;
            codigoLink.onclick = () => {
                document.getElementById('codigo').value = codigo;
                buscarPrecios(codigo);
            };
            menuDesplegable.appendChild(codigoLink);

            const precios = document.createElement('p');
            precios.innerHTML = `
                <strong>Crédito:</strong> $${formatearNumero(precioCredito)} 
                <strong>-20%:</strong> $${formatearNumero(precioTransferencia)} 
                <strong>-25%:</strong> $${formatearNumero(precioEfectivo)}
            `;
            menuDesplegable.appendChild(precios);

            menuDesplegable.appendChild(document.createElement('br'));
        }
    });
}
