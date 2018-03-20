import {
  SELECT_WEAPON,
  CALCULATE_RESULT,
  RESET_GAME
} from '../../actions/game';

const initialState = {
  gameState: null, // TODO SELECT_WEAPON | COUNTDOWN | RESULT
  userWeapon: null,
  cpuWeapon: null,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WEAPON:
      return {
        ...state,
        gameState: null, // TODO COUNTDOWN
        userWeapon: action.data.weapon,
        cpuWeapon: null // TODO Pick random weapon here
      };

    case CALCULATE_RESULT:
      return {
        ...state,
        gameState: null, // TODO RESULT
        results: [...state.results] // TODO Append result to array here
      };

    case RESET_GAME:
      return {
        ...state,
        gameState: null, // TODO SELECT_WEAPON
        userWeapon: null,
        cpuWeapon: null
      };

    default:
      return state;
  }
};
