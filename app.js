function verifyReply() {
  var proposedValue = valueField.value;
  var pattern = /^\d+$/;
  if (pattern.test(proposedValue)) {
    numberTry++;
    proposedValue = parseInt(proposedValue);
    if (proposedValue < valueToFind) {
      document.getElementById("result").innerHTML =
        "Le nombre à trouver est plus grand";
      valueField.value = "";
      valueField.focus();
    } else if (proposedValue > valueToFind) {
      document.getElementById("result").innerHTML =
        "Le nombre à trouver est plus petit";
      valueField.value = "";
      valueField.focus();
    } else {
      document.getElementById("result").innerHTML =
        "Youpie tu as trouver la solution en " + numberTry + "coups";
    }
  } else {
    document.getElementById("result").innerHTML = "hmmm c'est pas un chiffre";
    return false;
  }
}

let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifyReply();
});

var maxValue = 100;
var valueToFind = Math.floor(Math.random() * maxValue + 1);
console.log(valueToFind);
var numberTry = 0;
var valueField = document.getElementById("valueField");

if (valueToFind > maxValue) {
  valueToFind = maxValue;
}

document.getElementById("maxValue").innerHTML = maxValue;
valueField.value = "";
valueField.focus();
