'use strict';

class TopNav {
  constructor(selector) {
    this.nav = document.querySelector(selector);
    this.prevPos = 0;
    this.events();
  }

  events() {
    window.addEventListener(`scroll`, this.toggleTopNav.bind(this));
  }

  toggleTopNav() {
    const currentPos = window.pageYOffset;
    if (currentPos > this.prevPos) {
      this.nav.classList.add(`js-nav-hidden`);
    } else {
      this.nav.classList.remove(`js-nav-hidden`);
    }
    this.prevPos = currentPos;
  }
}

const controlNav = new TopNav(`.top-header`);
