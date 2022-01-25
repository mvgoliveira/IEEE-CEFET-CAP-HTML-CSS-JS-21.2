let operator = "";
let n1 = "";
let n2 = "";
let n = 0;
let isAnswered = false;

function calculate(event) {
  event.preventDefault();
  if (n1 !== "" && n2 !== "" && operator !== "") {
    switch (operator) {
      case "+":
        res = 0 + parseInt(n1) + parseInt(n2)
        break;

      case "-":
        res = 0 + parseInt(n1) - parseInt(n2)
        break;

      case "*":
        res = 0 + parseInt(n1) * parseInt(n2)
        break;

      case "/":
        res = 0 + parseInt(n1) / parseInt(n2)
        break;
    
      default:
        break;
    } 

    document.getElementById("display").innerHTML = "" + res;

    n1 = "" + res;
    n2 = "";
    operator = "";
    isAnswered = true;
  }
  
}

function erase() {
  document.getElementById("display").innerHTML = "";
}

function addNumber(number) {
  if (isAnswered) {
    document.getElementById("display").innerHTML = "";
    n1 = "";
  }

  isAnswered = false;

  if (operator === "") {
    document.getElementById("display").innerHTML += number;
    n1 = document.getElementById("display").innerHTML;
  } else if (operator !== "" && n2 === "") {
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML += number;
    n2 = document.getElementById("display").innerHTML;
  } else {
    document.getElementById("display").innerHTML += number;
  }
}

function addOperator(operatorSelected){
  operator = operatorSelected;
  isAnswered = false;
}