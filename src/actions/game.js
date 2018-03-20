export const SELECT_WEAPON = 'SET_USER_SELECTION';
export const CALCULATE_RESULT = 'CALCULATE_RESULT';
export const RESET_GAME = 'RESET_GAME';

export const selectWeapon = (weapon) => ({
  type: SELECT_WEAPON,
  data: {
    weapon
  }
});

export const calculateResult = () => ({
  type: CALCULATE_RESULT
});

export const resetGame = () => ({
  type: RESET_GAME
});