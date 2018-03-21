import { ROCK, PAPER, SCISSORS } from '../constants/weaponTypes';

import rockImage from '../images/hand-rock.png';
import paperImage from '../images/hand-paper.png';
import scissorsImage from '../images/hand-scissors.png';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const pickRandomWeapon = () => {
  const weaponsArray = [ROCK, PAPER, SCISSORS];
  const randomIndex = getRandomInt(weaponsArray.length);
  return weaponsArray[randomIndex];
}

export const getImageSrc = (weaponType) => {
  switch (weaponType) {
    case ROCK:
      return rockImage;
    case PAPER:
      return paperImage;
    case SCISSORS:
      return scissorsImage;
    default:
      return rockImage;
  }
}