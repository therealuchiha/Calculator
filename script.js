let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.innerText = currentInput;
}

function appendOperator(operator) {
  if (currentInput === "") return;
  if (/[+\-*/]$/.test(currentInput)) return; // prevent double operator
  currentInput += operator;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || "0";
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch {
    display.innerText = "Error";
    currentInput = "";
  }
}