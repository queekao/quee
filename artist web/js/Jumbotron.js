"use strict";
///INSERT JUMBOTRON
import * as variable from "./Variable.js";
const appendJumbotron = () => {
  const htmlJumbotron = `<div class="jumbotron moveRight">
  <div class="artist__wall animation">
    <h1 class="display-4 font-weight-normal">國美藏品維護保存系統</h1>
    <p class="lead font-weight-bolder">
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
  const formElement = document.querySelector(".form-element");
  const searchFormEl = document.querySelector(".search__form-inner");
  if (
    variable.landingPage.innerHTML.trim() === "" &&
    !(variable.form.innerHTML.trim() === "")
  ) {
    //   on the Form page
    formElement.remove();
    variable.main.prepend(variable.parallax);
    variable.landingPage.insertAdjacentHTML("afterbegin", htmlJumbotron);
    console.log("if success");
    localStorage.removeItem("form");
    variable.dropDownMenu.classList.remove("show");
    variable.header.classList.toggle("height");
    //search Expand
    variable.form.classList.remove("ativeSearch");
  }
  if (
    variable.landingPage.innerHTML.trim() === "" &&
    !(variable.searchForm.innerHTML.trim() === "")
  ) {
    // on the Search page
    searchFormEl.remove();
    variable.main.prepend(variable.parallax);
    variable.landingPage.insertAdjacentHTML("afterbegin", htmlJumbotron);
    variable.dropDownMenu.classList.remove("show");
    variable.header.classList.toggle("height");
    //search Expand
    variable.form.classList.remove("ativeSearch");
  }
};
export { appendJumbotron as appendJumbotron };
