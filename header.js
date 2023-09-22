let headerEle = document.querySelectorAll("li>a");
let li = document.querySelectorAll("li");

headerEle.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    e.style.borderBottom = "0.1rem solid #fff";
  });

  e.addEventListener("mouseleave", () => {
    e.style.borderBottom = "none";
  });
});

li.forEach(function (e) {
  e.addEventListener("mouseenter", () => {
    e.style.marginTop = "-0.3rem";
  });
  e.addEventListener("mouseleave", () => {
    e.style.marginTop = "0";
  });
});
