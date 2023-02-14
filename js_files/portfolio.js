// js code for nav hamburger-menu toggle onclick event
const menuele = document.querySelector(".menu-btn");
let navitemele = document.querySelector(".nav-links");
const bar1 = document.querySelector(".btn1");
const bar2 = document.querySelector(".btn2");
const bar3 = document.querySelector(".btn3");
menuele.addEventListener("click", function () {
  navitemele.classList.toggle("active");
  bar1.classList.toggle("bar1");
  bar2.classList.toggle("bar2");
  bar3.classList.toggle("bar3");
  menuele.classList.toggle("onclick-menu");
});

// to change the footer mistake
let footele = document.querySelector('.copyright')
footele.innerHTML = '<i class="fa-regular fa-copyright"></i>2023 All rights reserved.'

// custom styles for good looking websites this can be also done by html and css but need to change in every file so i added only in js so it can override html and css

const navlinks = document.querySelector('.nav-links')
navlinks.style.fontSize = "18px"
navlinks.style.letterSpacing = "1px"
