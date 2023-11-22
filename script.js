let displayValue = '';

function append(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
function clearLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}
function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}
function addPercentage() {
    displayValue += '/100';
    calculate();
}

function addDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        document.getElementById('display').value = displayValue;
    }
}