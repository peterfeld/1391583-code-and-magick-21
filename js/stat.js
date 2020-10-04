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
  return `hsl(235, ${100 * Math.random()}%, 34%)`;
};

window.renderStatistics = function (ctx, names, times) {
  let maxTime = getMaxElement(times);

  let getPlayersBar = function (arrPlayers, arrTimes) {
    for (let i = 0; i < arrPlayers.length; i++) {
      let barHeight = BAR_MAX_HEIGHT * arrTimes[i] / maxTime;
      let barX = CLOUD_X + (BAR_WIDTH + GAP) * i;
      let getColor = function (arr) {
        if (arr[i] === `Вы`) {
          return `rgba(255, 0, 0, 1)`;
        }
        return saturationRandom();
      };
      ctx.fillText(Math.round(arrTimes[i]), barX, CLOUD_Y - FONT_GAP * 2 - barHeight);
      ctx.fillStyle = getColor(arrPlayers);
      ctx.fillRect(barX, CLOUD_Y - FONT_GAP - barHeight, BAR_WIDTH, barHeight);
      ctx.fillStyle = `black`;
      ctx.fillText(arrPlayers[i], barX, CLOUD_Y);
    }
  };

  renderCloud(ctx, 110, 20, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, 100, 10, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `${Font.SIZE} ${Font.FAMILY}`;

  ctx.fillText(`Ура вы победили!`, 120, 40);
  ctx.fillText(`Список результатов:`, 120, 60);

  getPlayersBar(names, times);
};
