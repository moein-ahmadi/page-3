// loaded navbar scroll
window.onscroll = function () {
  mySticky();
};

let navbar = document.getElementById("loadered2");
let sticky = navbar.offsetTop;

function mySticky() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// loaded navbar scroll
// ---------------------
// menu/Sidebar

const menuClick = (x) => {
  x.classList.toggle("show");
  let n = document.getElementById("navbarshowandhidden");
  if (n.style.display === "block") {
    n.style.display = "none";
  } else {
    n.style.display = "block";
  }
};

// menu/Sidebar

// -------------------------

//  navigationSlider
let slideIndex = 1;
showSlide(slideIndex);

const plusSlides = (n) => {
  showSlide((slideIndex += n));
};

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
//  navigationSlider
// ----------------------------
// navigation1

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
}

// navigation1
