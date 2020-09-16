let form = document.querySelector(".form")
let formInputs = form.querySelectorAll(".js-form-input");


for (let formInput of formInputs) {
  if (formInput.hasAttribute("required")) {
    formInput.removeAttribute("required");
  }
}

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function (evt) {
    formInputs[i].classList.remove("form__input--invalid");
  });
};

form.addEventListener("submit", function (evt) {
  for (var i = 0; i < formInputs.length; i++) {
    if (!formInputs[i].value) {
      evt.preventDefault();
      formInputs[i].classList.remove("form__input--invalid");
      formInputs[i].offsetWidth = formInputs[i].offsetWidth;
      formInputs[i].classList.add("form__input--invalid");
    };
  };
});

let upButton = document.querySelector(".page-up");

window.addEventListener("scroll", function (evt) {
  if (window.pageYOffset > 200) {
    upButton.classList.add("page-up--active");
  }
  else {
    upButton.classList.remove("page-up--active");
  }
});

upButton.addEventListener("click", function (evt) {
  window.scrollTo(0, 0)
});
