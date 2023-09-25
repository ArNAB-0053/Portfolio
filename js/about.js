let education = document.querySelectorAll(".education");
let eduContent = document.querySelectorAll(".eduContent");
let educationContainer = document.querySelector(".educationContainer");

education.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    e.style.marginTop = "7.8rem";
  });
  e.addEventListener("mouseleave", () => {
    e.style.marginTop = "0";
  });
});

let hackathon = document.querySelectorAll(".hackathon");

// hackathon.forEach((e) => {
//   e.addEventListener("mouseenter", () => {
//     e.style.minHeight = "35vh";
//   });
//   e.addEventListener("mouseleave", () => {
//     e.style.minHeight = "20vh";
//   });
// });
