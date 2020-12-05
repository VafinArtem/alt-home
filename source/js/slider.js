"use strict";

const sliderNode = document.querySelector(`.js-slider`);
const sliderItemsNode = sliderNode.querySelectorAll(`.js-slide`);
const sliderArrowPrev = sliderNode.querySelector(`.js-slider-arr-prev`);
const sliderArrowNext = sliderNode.querySelector(`.js-slider-arr-next`);

const disabledButton = (buttonElement) => {
  buttonElement.setAttribute(`disabled`, `disabled`);
  buttonElement.classList.add(`slider__btn--not-active`);
};

const enabledButton = (buttonElement) => {
  buttonElement.removeAttribute(`disabled`);
  buttonElement.classList.remove(`slider__btn--not-active`);
};

sliderArrowNext.addEventListener(`click`, () => {
  for (let i = 0; i < sliderItemsNode.length; i++) {
    if (sliderItemsNode[i].classList.contains(`js-slide-active`)) {
      sliderItemsNode[i-1] !== undefined ? sliderItemsNode[i-1].classList.toggle(`js-slide-prev`) : enabledButton(sliderArrowPrev);

      sliderItemsNode[i].classList.remove(`js-slide-active`);
      sliderItemsNode[i].classList.add(`js-slide-prev`);

      sliderItemsNode[i+1].classList.remove(`js-slide-next`);
      sliderItemsNode[i+1].classList.add(`js-slide-active`);

      sliderItemsNode[i+2] === undefined ? disabledButton(sliderArrowNext) : sliderItemsNode[i+2].classList.add(`js-slide-next`);
      break;
    }
  }
});

sliderArrowPrev.addEventListener(`click`, () => {
  for (let i = 0; i < sliderItemsNode.length; i++) {
    if (sliderItemsNode[i].classList.contains(`js-slide-active`)) {
      sliderItemsNode[i+1] !== undefined ? sliderItemsNode[i+1].classList.toggle(`js-slide-next`) : enabledButton(sliderArrowNext);

      sliderItemsNode[i].classList.remove(`js-slide-active`);
      sliderItemsNode[i].classList.add(`js-slide-next`);


      sliderItemsNode[i-1].classList.remove(`js-slide-prev`);
      sliderItemsNode[i-1].classList.add(`js-slide-active`);

      sliderItemsNode[i-2] === undefined ? disabledButton(sliderArrowPrev) : sliderItemsNode[i-2].classList.add(`js-slide-prev`);
      break;
    }
  }
});
