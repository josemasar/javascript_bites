let numberInDisplay = "";
let result = 0;
let lastOperation = "";
let firstOperation = true;

function showAcumulatedValueInDisplay() {
  document.getElementById("display").value = result;
}

function display_number(number) {
  document.getElementById("display").value = numberInDisplay + number;
  numberInDisplay = document.getElementById("display").value;
}

function show_variables() {
  console.log("result", result);
  console.log("numberInDisplay", numberInDisplay);
  console.log("lastOperation", lastOperation);
  console.log("firstOperation", firstOperation);
}

function sum_number() {
  {
    lastOperation == "substract"
      ? ((result -= parseInt(numberInDisplay)), showAcumulatedValueInDisplay())
      : ((result += parseInt(numberInDisplay)), showAcumulatedValueInDisplay());
  }
  numberInDisplay = "";
  lastOperation = "sum";
  firstOperation = false;
  show_variables();
}

function substract_number() {
  if (firstOperation) {
    result = parseInt(numberInDisplay);
    lastOperation = false;
  } else {
    if (lastOperation == "sum" && !firstOperation) {
      result += parseInt(numberInDisplay);
      showAcumulatedValueInDisplay();
    } else {
      result -= parseInt(numberInDisplay);
      showAcumulatedValueInDisplay();
    }
  }

  numberInDisplay = "";
  lastOperation = "substract";
  show_variables();
}

//when clicking on equal button
function result_calculation() {
  if (lastOperation == "sum") {
    result += parseInt(numberInDisplay);
    showAcumulatedValueInDisplay();
  } else if (lastOperation == "substract") {
    result = result - parseInt(numberInDisplay);
    showAcumulatedValueInDisplay();
  }
  result = parseInt(document.getElementById("display").value);
  numberInDisplay = 0;
  show_variables();
}
