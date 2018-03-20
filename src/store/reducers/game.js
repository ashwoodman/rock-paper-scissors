import { SELECT_WEAPON, CALCULATE_RESULT, RESET_GAME } from '../../actions/game';
import { SELECTION, COUNTDOWN, RESULT } from '../../constants/gameState';
import { pickRandomWeapon } from '../../utils/weapon';

const initialState = {
  gameState: SELECTION,
  userWeapon: null,
  cpuWeapon: null,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WEAPON:
      return {
        ...state,
        gameState: COUNTDOWN,
        userWeapon: action.data.weapon,
        cpuWeapon: pickRandomWeapon(),
      };

    case CALCULATE_RESULT:
      return {
        ...state,
        gameState: RESULT,
        results: [...state.results] // TODO Append result to array here
      };

    case RESET_GAME:
      return {
        ...state,
        gameState: SELECTION,
        userWeapon: null,
        cpuWeapon: null
      };

    default:
      return state;
  }
};
