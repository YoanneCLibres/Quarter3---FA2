function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function printResult(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers';
        return;
    }
    
    document.getElementById('result').innerHTML = 'Result: ' + operation(num1, num2);
}
