var inputColorA = document.querySelector(".color-a");
var inputColorB = document.querySelector(".color-b");
var css = document.querySelector("h3");
var backgroundGradient = document.querySelector("body");
randomColorGenerator();
css.textContent = backgroundGradient.style.background + ";";

inputColorA.addEventListener("input", setGradient);
inputColorB.addEventListener("input", setGradient);

function randomColorGenerator() {
  var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  inputColorA.setAttribute("value", "#" + randomColor1);
  inputColorB.setAttribute("value", "#" + randomColor2);

  backgroundGradient.style.background =
    "linear-gradient(to right, " +
    "#" +
    randomColor1 +
    ", " +
    "#" +
    randomColor2 +
    ")";
}

function setGradient() {
  backgroundGradient.style.background =
    "linear-gradient(to right, " +
    inputColorA.value +
    ", " +
    inputColorB.value +
    ")";

  css.textContent = backgroundGradient.style.background + ";";
}