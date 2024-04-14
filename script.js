let feature = document.querySelector("#features");
let company = document.querySelector("#company");
let featureDropdown = document.querySelector(".f-drpdn");
let companyDropdown = document.querySelector(".c-drpdn");
let featureArrows = document.querySelector(".f-arr");
let companyArrows = document.querySelector(".c-arr");
let menu = document.querySelector(".m");
let nav = document.querySelector("nav");
let bgBlack = document.querySelector("body");

let pageLoader = document.getElementById("loader-wrapper");
window.addEventListener("load", (event) => {
  pageLoader.style.display = "none";
});

feature.addEventListener("click", () => {
  toggleDropdown(featureDropdown, featureArrows);
});

company.addEventListener("click", () => {
  toggleDropdown(companyDropdown, companyArrows);
});

function toggleDropdown(dropdown, arrows) {
  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none";
    arrows.style.transform = "rotate(0deg)";
  } else {
    dropdown.style.display = "flex";
    arrows.style.transform = "rotate(180deg)";
  }
}

menu.addEventListener("click", () => {
  menu.classList.toggle("opn-m");
  menu.classList.toggle("cls-m");
  bgBlack.classList.toggle("bdy");
  nav.classList.toggle("shw");
});
