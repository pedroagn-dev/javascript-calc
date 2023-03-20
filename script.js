let input = document.getElementById('input');

function appendToInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = '';
}

function deleteChar() {
    input.value = input.value.slice(0, -1);
}

function calculate() {
    let result = eval(input.value);
    input.value = result;
}

document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é um número
    if (/^[0-9+\-*/\.\(\)]$/.test(event.key)) {
        event.preventDefault();
        appendToInput(event.key);
    }
    // Verifica se a tecla pressionada é a tecla Enter
    else if (event.key === 'Enter') {
        event.preventDefault();
        calculate();
    }
    // Verifica se a tecla pressionada é a tecla Delete ou Backspace
    else if (event.key === 'Delete' || event.key === 'Backspace') {
        event.preventDefault();
        deleteChar();
    }
});
