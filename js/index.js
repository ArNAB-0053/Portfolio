let follow = document.querySelector("#follow");
let followDiv = document.getElementById("secondContent");
let secondContainer = document.getElementById("secondContainer");
let resume = document.querySelector(".resume-github>div");
let resumeTxt = document.querySelector(".resume-github>div>a");
let socialmediaSvg = document.querySelectorAll(".socialmedia>a>svg");
let socialmediaImg = document.querySelector(".socialmedia>a>img");

//---------- Follow me text---------- //

function handleMouseEnter() {
  follow.innerHTML = 'Follow me on,';
  secondContainer.style.top = '62vh';
  follow.style.top = '0';
}

function handleMouseLeave() {
  follow.innerHTML = '';
  secondContainer.style.top = '66vh';
  follow.style.top = '3vh';
}

followDiv.addEventListener('mouseenter', handleMouseEnter);
followDiv.addEventListener('mouseleave', handleMouseLeave);

socialmediaSvg.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    e.style.marginTop = "-3vh";
  });
  e.addEventListener("mouseleave", () => {
    e.style.marginTop = "0vh";
  });
});


// ---------- Social media links animation ---------- //

socialmediaImg.addEventListener("mouseenter", () => {
  socialmediaImg.style.marginTop = "-3vh";
});
socialmediaImg.addEventListener("mouseleave", () => {
  socialmediaImg.style.marginTop = "0vh";
});


//------------ For Responsive ------------//

if (window.innerWidth <= 768) {
  followDiv.removeEventListener('mouseenter', handleMouseEnter);
  followDiv.removeEventListener('mouseleave', handleMouseLeave);
}

//----------------------------------------//