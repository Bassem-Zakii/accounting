"use strict";

// navbar active links

const navLinks = document.querySelectorAll("header nav li");
const navBtn = document.querySelector("header .nav-btn");
const navList = document.querySelector("header nav ul");

navLinks.forEach((links) => {
  links.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  if (navBtn.classList.contains("active")) {
    navList.classList.add("active");
  } else {
    navList.classList.remove("active");
  }
});
