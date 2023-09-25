let follow = document.querySelector("#follow");
let followDiv = document.getElementById("secondContent");
let secondContainer = document.getElementById("secondContainer");
let resume = document.querySelector(".resume-github>div");
let resumeTxt = document.querySelector(".resume-github>div>a");
let socialmediaSvg = document.querySelectorAll(".socialmedia>a>svg");
let socialmediaImg = document.querySelector(".socialmedia>a>img");

followDiv.addEventListener("mouseenter", () => {
  (follow.innerHTML = "Follow me on,"), (secondContainer.style.top = "72vh");
  follow.style.top = "0";
});

followDiv.addEventListener("mouseleave", () => {
  (follow.innerHTML = ""),
    (secondContainer.style.top = "74vh"),
    (follow.style.top = "3vh");
});

// resume.addEventListener("mouseenter", () => {
//   resumeTxt.style.color = "#ffb433";
// });

// resume.addEventListener("mouseleave", () => {
//   resumeTxt.style.color = "#282834";
// });

socialmediaSvg.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    e.style.marginTop = "-3vh";
  });
  e.addEventListener("mouseleave", () => {
    e.style.marginTop = "0vh";
  });
});

socialmediaImg.addEventListener("mouseenter", () => {
  socialmediaImg.style.marginTop = "-3vh";
});
socialmediaImg.addEventListener("mouseleave", () => {
  socialmediaImg.style.marginTop = "0vh";
});
