"use strict";
const landingPage = document.querySelector(".landing-page");
const form = document.querySelector(".form");
const mainItem = document.querySelector(".main-item");
const joinBtn = document.querySelector(".btn-outline-primary");
const parallax = document.querySelector(".background-image");
// const localJumbotron = localStorage.setItem("jumbotron", "2");
// const localForm = localStorage.setItem("form", "1");
console.log(form.innerHTML);
const appendForm = () => {
  const htmlForm = `<form class="form-element animation">
<div class="form-background shadow-sm shadow p-3 bg-white rounded">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
    <small id="emailHelp" class="form-text text-muted"
      >We'll never share your email with anyone else.</small
    >
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
  localStorage.setItem("form", JSON.stringify(form));
  if (form.innerHTML === "") {
    jumbotron.remove();
    parallax.remove();
    form.insertAdjacentHTML("afterbegin", htmlForm);
    const data = localStorage.getItem("form");
    console.log(data);
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
    document.querySelector("body").prepend(parallax);
    landingPage.insertAdjacentHTML("afterbegin", htmlJumbotron);
    console.log("if success");
  }
};
const parallaxScroll = () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  console.log("scroll");
};
joinBtn.addEventListener("click", appendForm);
mainItem.addEventListener("click", appendJumbotron);
console.log(mainItem);
window.addEventListener("scroll", parallaxScroll);
