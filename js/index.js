// Your code goes here
const heading = document.querySelector(".logo-heading");
const links = document.querySelectorAll(".nav-link");
// INTRO HEADER SECTION
const introImg = document.querySelector(".intro img");
const introH2 = document.querySelector(".intro h2");
const introContent = document.querySelector(".intro p");
// All Text and Img Content
const textContent = document.querySelector(".text-content");
const textContentH2 = document.querySelectorAll(".text-content h2");
const textContentP = document.querySelectorAll(".text-content p");
const imgContentImg = document.querySelectorAll(".img-content img");
// CONTENT DESTINATION
const contentDestination = document.querySelector(".content-destination");
const destH2 = document.querySelector(".content-destination h2");
const destP = document.querySelector(".content-destination p");
const destImg = document.querySelector(".content-destination img");
// DESTINATION CONTENT PICK
const destPickH4 = document.querySelectorAll(".destination h4");
const destPickP = document.querySelectorAll(".destination p");
const destBtn = document.querySelectorAll(".destination .btn");
// FORM PASSWORD
const form = document.querySelector("#form");
const formPass = document.querySelector("#form input");
// FOOTER
const footer = document.querySelector(".footer");
const footerCP = document.querySelector(".footer p");

// mouseover
introImg.addEventListener("mouseover", function (e) {
  e.target.style.width = "50%";
  e.stopPropagation();
});

// keydown
Array.from(document.all).forEach((item) => {
  item.addEventListener("keydown", function (e) {
    // debugger;
    if (e.keyCode === 82) {
      heading.style.color = "red";
      e.stopPropagation();
    }
  });
});

// wheel
contentDestination.addEventListener("wheel", function (e) {
  if (e.target) {
    destImg.style.display = "none";
    e.stopPropagation();
  }
});

// load
window.addEventListener("load", function (e) {
  alert("Hello");
  console.log("Page Loaded");
});

// focus
formPass.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "red";
    event.target.style.color = "white";
  },
  true
);

// resize
window.addEventListener("resize", function (e) {
  console.log(window.innerHeight, window.innerWidth);
});

// scroll
document.addEventListener("scroll", function (e) {
  this.body.style.background = "black";
  this.body.style.color = "white";
  //   e.stopPropagation();
});

// select
formPass.addEventListener("select", (e) => {
  e.target.classList.add("dis-none");
  //   console.log(e.target);
  //   console.log(e.currentTarget);
});

// dblclick
destImg.addEventListener("dblclick", function (e) {
  formPass.classList.remove("dis-none");
  e.stopPropagation();
});

// mousemove
document.addEventListener("mousemove", function (e) {
  console.log(`X${e.clientX}, Y${e.clientY}`);
  e.stopPropagation();
});

links.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
  });
});
