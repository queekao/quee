"use strict";
//INSERT FORM/////////
import * as variable from "./Variable.js";
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
    variable.searchForm.innerHTML.trim() === "" &&
    !(variable.landingPage.innerHTML.trim() === "")
    // On the landingPage
  ) {
    jumbotron.remove();
    variable.parallax.remove();
    variable.searchForm.classList.add("append");
    variable.searchForm.insertAdjacentHTML("afterbegin", htmlSearch);
    variable.dropDownMenu.classList.remove("show");
    variable.header.classList.toggle("height");
    variable.main.style.overflow = "visible";
  }
  if (
    variable.searchForm.innerHTML.trim() === "" &&
    !(variable.form.innerHTML.trim() === "")
  ) {
    //   On the formPage
    formElement.remove();
    variable.searchForm.classList.add("append");
    variable.searchForm.insertAdjacentHTML("afterbegin", htmlSearch);
    variable.dropDownMenu.classList.remove("show");
    variable.header.classList.toggle("height");
    variable.main.style.overflow = "visible";
  }
};
export { appendSearchForm as appendSearchForm };
