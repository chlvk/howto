'use strict';

class TopNav {
  constructor(selector) {
    this.selector = selector.slice(1);
    this.nav = document.querySelector(selector);
    this.events();
  }

  events() {
    window.addEventListener(`scroll`, this.toggleTopNavSize.bind(this));
  }

  toggleTopNavSize() {
    const currentPos = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
    if (currentPos) {
      this.nav.classList.add(`${this.selector}--shrink`);
    } else {
      this.nav.classList.remove(`${this.selector}--shrink`);
    }
  }
}

const controlNav = new TopNav(`.top-header`);
