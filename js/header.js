let headerEle = document.querySelectorAll("li>a");
let li = document.querySelectorAll("li");

// Underline Animation
function headerHover(event) {
  event.currentTarget.style.borderBottom = "0.1rem solid #fff";
}

function headerNotHover(event) {
  event.currentTarget.style.borderBottom = "none";
}

if (window.innerWidth > 768) {
  headerEle.forEach(function (e) {
    e.addEventListener("mouseenter", headerHover);
    e.addEventListener("mouseleave", headerNotHover);
  });
}

// Margin top Animation
function headerMarginTop(event) {
  event.currentTarget.style.marginTop = "-0.3rem";
}

function headerNotMarginTop(event) {
  event.currentTarget.style.marginTop = "0";
}

if (window.innerWidth > 768) {
  li.forEach(function (e) {
    e.addEventListener("mouseenter", headerMarginTop);
    e.addEventListener("mouseleave", headerNotMarginTop);
  });
}
