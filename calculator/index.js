const submitButton = document.getElementById('submit_btn');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNumber = parseFloat(document.getElementById('first_number').value);
    const secondNumber = parseFloat(document.getElementById('second_number').value);
    const operator = document.getElementById('select_operator').value;
    const resultDisplay = document.getElementById('result');

    let result;

    if (operator === 'Addition') {
        result = firstNumber + secondNumber;
    } else if (operator === 'Substraction') {
        result = firstNumber - secondNumber;
    } else if (operator === 'Multiplication') {
        result = firstNumber * secondNumber;
    } else if (operator === 'Division') {
        if (secondNumber === 0) {
            resultDisplay.innerText = 'Error: Division by zero';
            return;
        }
        result = firstNumber / secondNumber;
    } else {
        resultDisplay.innerText = 'Please select an operator.';
        return;
    }

    resultDisplay.innerText = `Result: ${result}`;
});
