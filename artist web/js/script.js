"use strict";
const landingPage = document.querySelector(".landing-page");
const form = document.querySelector(".form");
const main = document.querySelector("main");
const mainItem = document.querySelector(".main-item");
const joinBtn = document.querySelector(".btn-outline-primary");
const dropDownMenu = document.querySelector(".navbar-collapse");
const parallax = document.querySelector(".background-image");
const header = document.querySelector(".header");
const toggler = document.querySelector(".navbar-toggler");
const dropDownSidebar = document.querySelector(".dropdown");
// console.log(form.innerHTML);

const appendForm = () => {
  const htmlForm = `<form class="form-element animation">
<div class="form-background bg-white rounded">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
 
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input
      type="password"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    />
  </div>
  <div class="form-group form-check">
  <small id="passwordHelp" class="form-text text-muted"
  >Forget Password?</small
>
    <input
      type="checkbox"
      class="form-check-input "
      id="exampleCheck1"
    />
    <label class="form-check-label" for="exampleCheck1"
      >Check me out</label
    >
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>`;
  const jumbotron = document.querySelector(".jumbotron");
  console.log(form.innerHTML === "");
  if (form.innerHTML === "") {
    jumbotron.remove();
    parallax.remove();
    form.insertAdjacentHTML("afterbegin", htmlForm);
    localStorage.setItem("form", 1);
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
  }
};
const appendJumbotron = () => {
  const htmlJumbotron = `<div class="jumbotron">
  <div class="artist__wall animation">
    <h1 class="display-4 font-weight-normal">國美藏品維護保存系統</h1>
    <p class="lead font-weight-normal">
      我們擁有最專業的藝術作品，以及最棒的社課活動，如果想要加入社團請點選下方連結。
    </p>
    <hr class="my-4" />
    <p class="context">
      點選下方的連結，我們將會有最專業的人士給您最專業的意見！
    </p>
    <a
      class="btn btn-primary btn-lg"
      href="javascript:void(0)"
      role="button"
      >瞭解更多</a
    >
  </div>
</div>`;
  console.log("append");
  const formElement = document.querySelector(".form-element");
  console.log(formElement);
  if (landingPage.innerHTML.trim() === "") {
    formElement.remove();
    main.prepend(parallax);
    landingPage.insertAdjacentHTML("afterbegin", htmlJumbotron);
    console.log("if success");
    localStorage.removeItem("form");
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
  }
};
console.log(window.pageXOffset);
const parallaxScroll = () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  console.log("scroll");
};
//Callback
joinBtn.addEventListener("click", appendForm);
mainItem.addEventListener("click", appendJumbotron);
window.addEventListener("scroll", parallaxScroll);
//Sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let toolTip = document.querySelectorAll(".tooltip");
btn.onclick = function () {
  sidebar.classList.toggle("active");
  dropDownSidebar.classList.toggle("toggle");
  main.classList.toggle("move");
  if (sidebar.classList.contains("active")) {
    toolTip.forEach((el) => (el.style.display = "none"));
  }
  if (!sidebar.classList.contains("active")) {
    toolTip.forEach((el) => (el.style.display = "block"));
  }
};
// searchBtn.onclick = function () {
//   dropDownSidebar.classList.toggle("toggle");
// };
//Header
toggler.onclick = function () {
  header.classList.toggle("height");
};
