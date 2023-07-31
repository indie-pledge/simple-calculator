function calculate() {
  const firstNumber = Number(document.getElementById('first-number').value);
  const secondNumber = Number(document.getElementById('second-number').value);

  const result = firstNumber + secondNumber;
  
  document.getElementById('result').innerText = `Result: ${result}`;
}
