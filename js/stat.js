'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 135;
const CLOUD_Y = 265;
const BAR_WIDTH = 40;
const BAR_MAX_HEIGHT = 150;
const GAP = 50;
const FONT_GAP = 15;

let Font = {
  SIZE: `16px`,
  FAMILY: `PT Mono`
};

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

let saturationRandom = () => {
  return `hsl(` + `235` + `,` + (100 * Math.random()) + `%,` + `34%)`;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, 100, 10, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `${Font.SIZE} ${Font.FAMILY}`;

  ctx.fillText(`Ура вы победили!`, 120, 40);
  ctx.fillText(`Список результатов:`, 120, 60);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    let barHeight = BAR_MAX_HEIGHT * times[i] / maxTime;
    let barY = CLOUD_X + (BAR_WIDTH + GAP) * i;
    ctx.fillText(Math.round(times[i]), barY, CLOUD_Y - FONT_GAP * 2 - barHeight);
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = saturationRandom();
    }
    ctx.fillRect(barY, CLOUD_Y - FONT_GAP - barHeight, BAR_WIDTH, barHeight);
    ctx.fillStyle = `black`;
    ctx.fillText(names[i], barY, CLOUD_Y);
  }
};

