function calculate() {
  // Fetch the user input values
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operator = document.getElementById('operator').value;

  // Handle invalid or missing inputs
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText = "Please enter valid numbers!";
    return;
  }

  let result;

  // Perform operation based on the operator
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      if (num2 === 0) {
        document.getElementById('result').innerText = "Error: Division by zero!";
        return;
      }
      result = divide(num1, num2);
      break;
    default:
      document.getElementById('result').innerText = "Invalid operator!";
      return;
  }

  // Display the result, rounded to 2 decimal places
  document.getElementById('result').innerText = "Result = " + result.toFixed(2);
}

// Define the operation functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
