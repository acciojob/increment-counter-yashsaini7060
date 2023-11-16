//your JS code here. If required.

function incrementCounter() {
  var counter = document.getElementById("counter");
  var currentValue = Number(counter.innerHTML);
  // alert("Current value: " + currentValue);
  counter.innerHTML = currentValue + 1;
}