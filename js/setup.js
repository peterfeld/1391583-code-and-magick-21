'use strict';

const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`де Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];

let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

const getRandomNumder = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomData = function (arr) {
  let arrHeight = arr.length - 1;
  let randomIndex = getRandomNumder(0, arrHeight);
  return arr[randomIndex];
};

const getRandomName = function (arrNames, arrSurnames) {
  let randomName = getRandomData(arrNames);
  let randomSurname = getRandomData(arrSurnames);
  return randomName + ` ` + randomSurname;
};

let wizards = [
  {
    name: getRandomName(NAMES, SURNAMES),
    coatColor: getRandomData(coatColors),
    eyesColor: getRandomData(eyesColors)
  },
  {
    name: getRandomName(NAMES, SURNAMES),
    coatColor: getRandomData(coatColors),
    eyesColor: getRandomData(eyesColors)
  },
  {
    name: getRandomName(NAMES, SURNAMES),
    coatColor: getRandomData(coatColors),
    eyesColor: getRandomData(eyesColors)
  },
  {
    name: getRandomName(NAMES, SURNAMES),
    coatColor: getRandomData(coatColors),
    eyesColor: getRandomData(eyesColors)
  },
];

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
