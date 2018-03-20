import reducer from './game';
import { selectWeapon, calculateResult, resetGame } from '../../actions/game';
import { ROCK, PAPER, SCISSORS } from '../../constants/weaponTypes';
import { SELECTION, COUNTDOWN, RESULT } from '../../constants/gameState';
import { WIN } from '../../constants/results';

describe('game reducer', () => {
  let state;

  beforeEach(() => {
    state = reducer(undefined, {});
  });

  it('should set user weapon when user selects weapon', () => {
    const newState = reducer(state, selectWeapon(SCISSORS));
    expect(newState.userWeapon).toBe(SCISSORS);
  });

  it('should set cpu weapon when user selects weapon', () => {
    const newState = reducer(state, selectWeapon(SCISSORS));
    expect([ROCK, PAPER, SCISSORS]).toContain(newState.cpuWeapon);
  });

  it('should move game state to countdown when user selects weapon', () => {
    const newState = reducer(state, selectWeapon(SCISSORS));
    expect(newState.gameState).toBe(COUNTDOWN);
  });

  it('should append new result when calculating result', () => {
    const newState = reducer({ ...state, userWeapon: ROCK, cpuWeapon: SCISSORS }, calculateResult());
    expect(newState.results.length).toBe(state.results.length + 1);
  });

  it('should append win result when user wins', () => {
    const newState = reducer({ ...state, userWeapon: ROCK, cpuWeapon: SCISSORS }, calculateResult());
    expect(newState.results[0]).toBe(WIN);
  });
});
