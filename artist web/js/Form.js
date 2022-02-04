"use strict";
import * as variable from "./Variable.js";
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
  if (
    variable.form.innerHTML.trim() === "" &&
    !(variable.landingPage.innerHTML.trim() === "")
  ) {
    jumbotron.remove();
    variable.parallax.remove();
    variable.form.insertAdjacentHTML("afterbegin", htmlForm);
    localStorage.setItem("form", 1);
    variable.dropDownMenu.classList.remove("show");
    variable.header.classList.toggle("height");
    //search Expand
    // variable.form.classList.remove("ativeSearch");
  }
  if (
    variable.form.innerHTML.trim() === "" &&
    !(variable.searchForm.innerHTML.trim() === "")
  ) {
    searchFormEl.remove();
    variable.parallax.remove();
    variable.form.insertAdjacentHTML("afterbegin", htmlForm);
    variable.dropDownMenu.classList.remove("show");
    variable.header.classList.toggle("height");
    //search Expand
    // variable.form.classList.remove("ativeSearch");
  }
};
export { appendForm as appendForm };
