let education = document.querySelectorAll(".education");
let eduContent = document.querySelectorAll(".eduContent");
let educationContainer = document.querySelector(".educationContainer");

function handleMouseEnter(event) {
  event.currentTarget.style.marginTop = '7.8rem';
}

function handleMouseLeave(event) {
  event.currentTarget.style.marginTop = '0';
}

if (window.innerWidth > 768) {
  education.forEach(function (e) {
    e.addEventListener('mouseenter', handleMouseEnter);
    e.addEventListener('mouseleave', handleMouseLeave);
  });
}

if (window.innerWidth <= 768) {
  education.forEach(function (e) {
    e.removeEventListener('mouseenter', handleMouseEnter);
    e.removeEventListener('mouseleave', handleMouseLeave);
  });
}
