function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);

    if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(value)) {
        return;
    }
    display.value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Ошибка';
    }
}