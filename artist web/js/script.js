"use strict";
import * as variable from "./Variable.js";
import { appendForm } from "./Form.js";
import { appendJumbotron } from "./Jumbotron.js";
import { appendSearchForm } from "./SearchForm.js";
let sidebar = document.querySelector(".sidebar");
console.log(window.pageXOffset);
const parallaxScroll = () => {
  let offset = window.pageYOffset;
  variable.parallax.style.backgroundPositionY = offset * 0.7 + "px";
  console.log("scroll");
  // variable.parallax.style.transition = "none";
};
//////////Callback///////
variable.joinBtn.addEventListener("click", appendForm);
variable.mainItem.addEventListener("click", appendJumbotron);
variable.searchBtn.addEventListener("click", appendSearchForm);
window.addEventListener("scroll", parallaxScroll);
///////Sidebar////////////
// let btn = document.querySelector("#btn");
// let searchBtn = document.querySelector(".bx-search");
// let toolTip = document.querySelectorAll(".tooltip");
variable.main.classList.toggle("moveRight");
if (screen.width < 992) {
  sidebar.classList.remove("active");
}
if (screen.width > 992) {
  variable.main.classList.add("moveRight");
}
if (screen.width < 992) variable.SidebarBtn.classList.remove("moveLeft");
if (screen.width > 992) variable.dropDownSidebar.classList.add("toggle");
if (screen.width < 992) variable.jumbotron.classList.remove("moveRight");
variable.SidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  variable.dropDownSidebar.classList.add("toggle");
  variable.main.classList.toggle("moveRight");
  variable.jumbotron.classList.toggle("moveRight");
  variable.SidebarBtn.classList.toggle("moveLeft");
  // variable.parallax.style.transition = "all 0.3s";
  //   if (sidebar.classList.contains("active")) {
  //     toolTip.forEach((el) => (el.style.display = "none"));
  //   }
  //   if (!sidebar.classList.contains("active")) {
  //     toolTip.forEach((el) => (el.style.display = "block"));
  //   }
};
// searchBtn.onclick = function () {
//   dropDownSidebar.classList.toggle("toggle");
// };
////////////Header////////////
variable.toggler.onclick = function () {
  variable.header.classList.toggle("height");
};
