"use strict";

//hamburger menubar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//contact form
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  alert("Thanks for contacting!");
});

// //scroll topfunction code
var myButton = document.getElementById("myBtn");
// when the user scrolls down 20px from top of the document ,show the button.
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    myButton.style.display = "block";
    document.querySelector("nav").style.backgroundColor = "gradient";
    document.querySelector("nav").style.color = "black";
    //sticky navbar
    
  } else {
    myButton.style.display = "none";
  }
  let header = document.querySelector('.navbar');
    header.classList.toggle("sticky",window.scrollY > 0);
}

myButton.addEventListener("click", topFunction);
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

