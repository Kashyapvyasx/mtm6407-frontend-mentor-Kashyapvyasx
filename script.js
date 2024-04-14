let feature = document.querySelector("#main-features");
let company = document.querySelector("#main-company");
let feature_dropdown = document.querySelector(".main-feature-dropdown");
let company_dropdown = document.querySelector(".main-company-dropdown");
let feature_arrows = document.querySelector(".feature-arrow");
let company_arrows = document.querySelector(".main-company-arrow");
let menu = document.querySelector(".main-menu");
let nav = document.querySelector("nav");
let bg_black = document.querySelector("body");


let page_loader = document.getElementById("loader-wrapper");
window.addEventListener("load", (event) => {
  page_loader.style.display = "none";
});


feature.addEventListener("click", () => {
  toggleDropdown(feature_dropdown, feature_arrows);
});

company.addEventListener("click", () => {
  toggleDropdown(company_dropdown, company_arrows);
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
  menu.classList.toggle("open_menu");
  menu.classList.toggle("close_menu");
  bg_black.classList.toggle("body");
  nav.classList.toggle("show");
});
