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

const iterating = (items, direction) => {
  let nextSlide = null;
  let nextSlideClass = null;
  let prevSlideClass = null;

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains(`js-slide-active`)) {

      if (direction === `right`) {
        nextSlide = i + 1;
        nextSlideClass = `js-slide-next`;
        prevSlideClass = `js-slide-prev`;
      } else if (direction === `left`) {
        nextSlide = i - 1;
        nextSlideClass = `js-slide-prev`;
        prevSlideClass = `js-slide-next`;
      }

      if (direction === `left`) {
        items[nextSlide+2] !== undefined ? items[nextSlide+2].classList.toggle(prevSlideClass) : enabledButton(sliderArrowNext);
      } else {
        items[nextSlide-2] !== undefined ? items[nextSlide-2].classList.toggle(prevSlideClass) : enabledButton(sliderArrowPrev);
      }

      items[i].classList.remove(`js-slide-active`);
      items[i].classList.add(prevSlideClass);

      items[nextSlide].classList.remove(nextSlideClass);
      items[nextSlide].classList.add(`js-slide-active`);

      if (direction === `left`) {
        items[nextSlide-1] === undefined ? disabledButton(sliderArrowPrev) : items[nextSlide-1].classList.add(nextSlideClass);
      } else {
        items[nextSlide+1] === undefined ? disabledButton(sliderArrowNext) : items[nextSlide+1].classList.add(nextSlideClass);
      }
      break;
    }
  }
};

sliderArrowNext.addEventListener(`click`, () => {
  iterating(sliderItemsNode, `right`);
});

sliderArrowPrev.addEventListener(`click`, () => {
  iterating(sliderItemsNode, `left`);
});
