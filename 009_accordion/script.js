'use strict';

class Accordion {
  constructor(selector) {
    this.acc = document.querySelector(selector);
    this.items = this.acc.querySelectorAll(`.acc__item`);
    this.headers = this.acc.querySelectorAll(`.acc__item-header`);
    this.events();
  }
  events() {
    document.addEventListener(`DOMContentLoaded`, this.hideAllBlocks.bind(this));
    this.acc.addEventListener(`click`, this.toggleItemState.bind(this));
  }

  hideAllBlocks() {
    this.items.forEach((item) => {
      item.classList.add(`acc__item--hidden`);
    });
  }

  toggleItemState({target}) {
    if (target.closest(`.acc__item-header`)) {
      target.closest(`.acc__item`).classList.toggle(`acc__item--hidden`);
    }
  }
}

const acc = new Accordion(`.js-accordion`);
