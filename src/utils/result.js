import { ROCK, PAPER, SCISSORS } from '../constants/weaponTypes';
import { WIN, DRAW, LOSE } from '../constants/results';

// result[userWeapon][cpuWeapon] => userResult

const result = {
  [ROCK]: {
    [ROCK]: DRAW,
    [PAPER]: LOSE,
    [SCISSORS]: WIN
  },
  [PAPER]: {
    [ROCK]: WIN,
    [PAPER]: DRAW,
    [SCISSORS]: LOSE
  },
  [SCISSORS]: {
    [ROCK]: LOSE,
    [PAPER]: WIN,
    [SCISSORS]: DRAW
  }
}

export const calculateResult = (userWeapon, cpuWeapon) => {
  return result[userWeapon][cpuWeapon];
}