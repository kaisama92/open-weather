import isError from './error.js';
import './css/styles.css';

function handleSelect(event) {
  event.preventDefault();
  const input1 = parseInt(document.getElementById("select-beverage").value);
  const input2 = parseInt(document.getElementById("select-car").value);
  const input3 = parseInt(document.getElementById("select-animal").value);
  const input4 = parseInt(document.getElementById("select-shoe").value);
  const input5 = parseInt(document.getElementById("select-event").value);
  
  const userName = document.getElementById("person1").value;

  let output;
  let totalValue = ((((input1 + input2) + input3) + input4) + input5);
  if (isError(input1, input2, input3, input4, input5)) {
    output = "Error";
    document.querySelector("p#error").removeAttribute("class", "hidden");
    document.querySelector("p#Java").setAttribute("class", "hidden");
    document.querySelector("p#python").setAttribute("class", "hidden");
    document.querySelector("p#C").setAttribute("class", "hidden");
  } else {

    if (totalValue === 5) {
      output = "JavaScript";
      document.querySelector("p#Java").removeAttribute("class");
      document.querySelector("p#python").setAttribute("class", "hidden");
      document.querySelector("p#C").setAttribute("class", "hidden");
      document.querySelector("p#error").setAttribute("class", "hidden");
    } else if (totalValue > 5 && totalValue <= 10) {
      output = "Python";
      document.querySelector("p#Java").setAttribute("class", "hidden");
      document.querySelector("p#python").removeAttribute("class");
      document.querySelector("p#C").setAttribute("class","hidden");
      document.querySelector("p#error").setAttribute("class", "hidden");

    } else if (totalValue > 10 && totalValue <= 15) {
      output = "C++";

      document.querySelector("p#Java").setAttribute("class", "hidden");
      document.querySelector("p#python").setAttribute("class", "hidden");
      document.querySelector("p#C").removeAttribute("class");
      document.querySelector("p#error").setAttribute("class", "hidden");
    } 
  }

  document.getElementById("output").innerText = output;
  document.querySelector("span#name1").innerText =  userName;
  document.querySelector("span#name2").innerText = userName;
  document.querySelector("span#name3").innerText = userName;
}

window.addEventListener("load", function() {
  this.document.getElementById("select-form").addEventListener("submit", handleSelect);
});