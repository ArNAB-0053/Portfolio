let js = document.getElementById("js");
let python = document.getElementById("python");
let c = document.getElementById("c");
let percentageJS = document.getElementById("percentageJS");
let percentagePy = document.getElementById("percentagePy");
let percentageJava = document.getElementById("percentageJava");
let numberWeb = document.getElementById("number-web");
let numberML = document.getElementById("number-ML");

let java = document.getElementById("java");
let jsCount = (pyCount = cCount = javaCount = 0);
let counterWeb = 0;
let counterML = 0;

// JS
setInterval(() => {
  if (jsCount == 75) {
    clearInterval();
  } else {
    jsCount += 1;
    percentageJS.innerHTML = jsCount + "%";
  }
}, 26);

// Python
setInterval(() => {
  if (pyCount == 85) {
    clearInterval();
  } else {
    pyCount += 1;
    percentagePy.innerHTML = pyCount + "%";
  }
}, 22);

// C
setInterval(() => {
  if (cCount == 87) {
    clearInterval();
  } else {
    cCount += 1;
    percentageC.innerHTML = cCount + "%";
  }
}, 21.3);

// Java
setInterval(() => {
  if (javaCount == 68) {
    clearInterval();
  } else {
    javaCount += 1;
    percentageJava.innerHTML = javaCount + "%";
  }
}, 28);

// Web Development
setInterval(() => {
  if (counterWeb == 60) {
    clearInterval();
  } else {
    counterWeb += 1;
    numberWeb.innerHTML = counterWeb + "%";
  }
}, 32);

// ML
setInterval(() => {
  if (counterML == 45) {
    clearInterval();
  } else {
    counterML += 1;
    numberML.innerHTML = counterML + "%";
  }
}, 32);
