// Calculadora Legal Interactiva

function calculateFee() {
    const areaFee = parseFloat(document.getElementById('calc-area').value);
    const complexity = parseFloat(document.getElementById('calc-complexity').value);
    const hours = parseInt(document.getElementById('calc-hours').value);

    document.getElementById('hours-val').innerText = hours + 'h';

    const total = Math.round(areaFee * complexity * hours);
    document.getElementById('total-fee').innerText = 'S/ ' + total.toLocaleString('es-PE');
}

window.calculateFee = calculateFee;
