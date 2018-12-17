'use strict';

class ToggleButton {
  constructor(selector) {
    this.btn = document.querySelector(selector);
    this.events();
  }
  events() {
    this.btn.addEventListener(`click`, this.toggleClass.bind(this));
  }

  toggleClass() {
    this.btn.classList.toggle(`burger--open`);
  }
}

const burger = new ToggleButton(`.js-burger`);
