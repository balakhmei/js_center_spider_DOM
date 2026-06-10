'use strict';

const spider = document.querySelector('.spider');
const spiderDim = spider.getBoundingClientRect();

const wall = document.querySelector('.wall');
const wallDim = wall.getBoundingClientRect();

const leftSpider = (wallDim.width - spiderDim.width) / 2;
const topSpider = (wallDim.height - spiderDim.height) / 2;

spider.style.left = leftSpider + 'px';
spider.style.top = topSpider + 'px';
