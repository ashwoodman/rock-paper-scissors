import { ROCK, PAPER, SCISSORS } from '../constants/weaponTypes';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const pickRandomWeapon = () => {
  const weaponsArray = [ROCK, PAPER, SCISSORS];
  const randomIndex = getRandomInt(weaponsArray.length);
  return weaponsArray[randomIndex];
}