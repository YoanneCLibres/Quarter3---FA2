function performOperation(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operation) {
            case 'add':
                result = The sum of ${num1} and ${num2} is ${num1 + num2}.;
                break;
            case 'subtract':
                result = The difference of ${num1} and ${num2} is ${num1 - num2}.;
                break;
            case 'multiply':
                result = The product of ${num1} and ${num2} is ${num1 * num2}.;
                break;
            case 'divide':
                result = num2 !== 0 ? The quotient of ${num1} and ${num2} is ${num1 / num2}. : "Cannot divide by zero";
                break;
            case 'modulus':
                result = num2 !== 0 ? The remainder of ${num1} divided by ${num2} is ${num1 % num2}. : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }
    }
    
    document.getElementById("result").innerHTML = result;
}
