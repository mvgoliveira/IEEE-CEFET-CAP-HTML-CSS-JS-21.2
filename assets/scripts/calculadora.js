let operator = "";
let n1 = "";
let n2 = "";

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

    document.getElementById("display").innerHTML = "" + res.toFixed(2);

    n1 = "" + res;
    n2 = "";
    operator = "";
  }
  
}

function erase() {
  n1 = "";
  n2 = "";
  operator = "";
  document.getElementById("display").innerHTML = "";
}

function addNumber(number) {

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
  if (n1 !== "") {
    operator = operatorSelected;
  }
}