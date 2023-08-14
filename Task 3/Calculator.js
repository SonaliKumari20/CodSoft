let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  document.querySelector(".screen").value = "";
}
function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('.screen').value = displayValue;
}

function addNumbers() {
  result = parseFloat(firstNumber) + parseFloat(secondNumber);
  document.querySelector(".screen").value = result;
}

function subtractNumbers() {
  result = parseFloat(firstNumber) - parseFloat(secondNumber);
  document.querySelector(".screen").value = result;
}

function multiplyNumbers() {
  result = parseFloat(firstNumber) * parseFloat(secondNumber);
  document.querySelector(".screen").value = result;
}

function divideNumbers() {
  result = parseFloat(firstNumber) / parseFloat(secondNumber);
  document.querySelector(".screen").value = result;
}

document.querySelector(".btn-c").addEventListener("click", clearDisplay);

document.querySelectorAll(".btn-numeric").forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += button.dataset.num;
    } else {
      secondNumber += button.dataset.num;
    }
    document.querySelector(".screen").value = firstNumber + operator + secondNumber;
  });
});

document.querySelectorAll(".btn-operator").forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.dataset.num;
    secondNumber = "";
    document.querySelector(".screen").value = firstNumber + operator + "";
  });
});

document.querySelector(".btn-equal").addEventListener("click", () => {
  switch (operator) {
    case "+":
      addNumbers();
      break;
    case "-":
      subtractNumbers();
      break;
    case "*":
      multiplyNumbers();
      break;
    case "/":
      divideNumbers();
      break;
  }
});
