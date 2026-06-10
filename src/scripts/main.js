'use strict';

const spider = document.querySelector('.spider');
const spiderDim = {
  width: spider.offsetWidth,
  height: spider.offsetHeight,
};

const wall = document.querySelector('.wall');
const wallDim = {
  width: wall.offsetWidth,
  height: wall.offsetHeight,
};

const leftSpider = (wallDim.width - spiderDim.width) / 2;
const topSpider = (wallDim.height - spiderDim.height) / 2;

spider.style.left = leftSpider + 'px';
spider.style.top = topSpider + 'px';
