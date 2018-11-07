'use strict';

class TopNav {
  constructor(selector) {
    this.nav = document.querySelector(selector);
    this.control = this.nav.querySelector(`.js-control`);
    this.list = this.nav.querySelector(`.js-list`);
    this.events();
  }
  events() {
    this.nav.classList.add(`js-nav-hidden`);
    this.control.addEventListener(`click`, this.toggleNav.bind(this));
  }
  toggleNav() {
    this.nav.classList.toggle(`js-nav-hidden`);
  }
}

const nav = new TopNav(`.top-nav`);
