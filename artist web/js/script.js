"use strict";
//where INSERT element
const landingPage = document.querySelector(".landing-page");
const form = document.querySelector(".form");
const searchForm = document.querySelector(".search__form");
const main = document.querySelector("main");
//header
const bgImg = document.querySelector(".background-image");
const header = document.querySelector(".header");
//
const mainItem = document.querySelector(".main-item");
const joinBtn = document.querySelector(".btn-outline-primary");
const searchBtn = document.querySelector(".btn-outline-success");
const dropDownMenu = document.querySelector(".navbar-collapse");
const parallax = document.querySelector(".background-image");
const toggler = document.querySelector(".navbar-toggler");
const dropDownSidebar = document.querySelector(".dropdown");
// console.log(form.innerHTML);

// The ELements INSERT

///INSERT FOMR
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
  const searchFormEl = document.querySelector(".search__form-inner");
  const jumbotron = document.querySelector(".jumbotron");
  if (form.innerHTML.trim() === "" && !(landingPage.innerHTML.trim() === "")) {
    jumbotron.remove();
    parallax.remove();
    form.insertAdjacentHTML("afterbegin", htmlForm);
    localStorage.setItem("form", 1);
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
  }
  if (form.innerHTML.trim() === "" && !(searchForm.innerHTML.trim() === "")) {
    searchFormEl.remove();
    parallax.remove();
    form.insertAdjacentHTML("afterbegin", htmlForm);
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
  }
};

///INSERT JUMBOTRON
const appendJumbotron = () => {
  const htmlJumbotron = `<div class="jumbotron">
  <div class="artist__wall animation">
    <h1 class="display-4 font-weight-normal">國美藏品維護保存系統</h1>
    <p class="lead font-weight-normal font-weight-bolder">
      我們擁有最專業的藝術作品，以及最棒的社課活動，如果想要加入社團請點選下方連結。
    </p>
    <hr class="my-4" />
    <p class="context font-weight-bolder">
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
  const searchFormEl = document.querySelector(".search__form-inner");
  const formElement = document.querySelector(".form-element");
  if (landingPage.innerHTML.trim() === "" && !(form.innerHTML.trim() === "")) {
    //   on the Form page
    formElement.remove();
    main.prepend(parallax);
    landingPage.insertAdjacentHTML("afterbegin", htmlJumbotron);
    console.log("if success");
    localStorage.removeItem("form");
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
  }
  if (
    landingPage.innerHTML.trim() === "" &&
    !(searchForm.innerHTML.trim() === "")
  ) {
    // on the Search page
    searchFormEl.remove();
    main.prepend(parallax);
    landingPage.insertAdjacentHTML("afterbegin", htmlJumbotron);
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
  }
};
//INSERT FORM/////////
const appendSearchForm = () => {
  const htmlSearch = `<div class="search__form-inner animation">
  <form class="form-inline">
    <input
      class="form-control"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
      Search
    </button>
  </form>
  <p>No Content</p>
  <div class="input-group__select mb-3">
    <div class="input-group">
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select type
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Arstist</a>
          <a class="dropdown-item" href="#">Music</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Need help?</a>
        </div>
      </div>
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select type
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Arstist</a>
          <a class="dropdown-item" href="#">Music</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Need help?</a>
        </div>
      </div>
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select type
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Arstist</a>
          <a class="dropdown-item" href="#">Music</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Need help?</a>
        </div>
      </div>
    </div>
  </div>
</div>`;
  const formElement = document.querySelector(".form-element");
  const jumbotron = document.querySelector(".jumbotron");
  if (
    searchForm.innerHTML.trim() === "" &&
    !(landingPage.innerHTML.trim() === "")
    // On the landingPage
  ) {
    jumbotron.remove();
    parallax.remove();
    searchForm.classList.add("append");
    searchForm.insertAdjacentHTML("afterbegin", htmlSearch);
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
    main.style.overflow = "visible";
  }
  if (searchForm.innerHTML.trim() === "" && !(form.innerHTML.trim() === "")) {
    //   On the formPage
    formElement.remove();
    searchForm.classList.add("append");
    searchForm.insertAdjacentHTML("afterbegin", htmlSearch);
    dropDownMenu.classList.remove("show");
    header.classList.toggle("height");
    main.style.overflow = "visible";
  }
};
console.log(window.pageXOffset);
const parallaxScroll = () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  console.log("scroll");
  parallax.style.transition = "none";
};
//Callback
joinBtn.addEventListener("click", appendForm);
mainItem.addEventListener("click", appendJumbotron);
searchBtn.addEventListener("click", appendSearchForm);
window.addEventListener("scroll", parallaxScroll);
//Sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
// let searchBtn = document.querySelector(".bx-search");
let toolTip = document.querySelectorAll(".tooltip");
bgImg.classList.toggle("move");
if (screen.width < 992) {
  sidebar.classList.remove("active");
}
if (screen.width > 992) {
  bgImg.classList.add("move");
}

btn.onclick = function () {
  sidebar.classList.toggle("active");
  dropDownSidebar.classList.add("toggle");
  bgImg.classList.toggle("move");
  parallax.style.transition = "all 0.3s";
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
//Header
toggler.onclick = function () {
  header.classList.toggle("height");
};
