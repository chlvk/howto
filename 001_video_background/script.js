'use strict';

class VideoBlock {
  constructor(selectorBlock) {
    this.block = document.querySelector(selectorBlock);
    this.video = this.block.querySelector(`.js-video`);
    this.control = this.block.querySelector(`.js-control`);
    this.isPlaying = true;
    this.events();
  }
  events() {
    this.control.addEventListener(`click`, this.toggleVideoPlay.bind(this));
  }
  toggleVideoPlay({target}) {
    if (this.isPlaying) {
      this.video.pause();
      target.innerHTML = `Play`;
    } else {
      this.video.play();
      target.innerHTML = `Pause`;
    }
    this.isPlaying = !this.isPlaying;
  }
}

const newVideoBlock = new VideoBlock(`.article`);
