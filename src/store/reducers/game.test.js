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

  it('should move game state to result when calculating result', () => {
    const newState = reducer({ ...state, userWeapon: ROCK, cpuWeapon: SCISSORS }, calculateResult());
    expect(newState.gameState).toBe(RESULT);
  });

  it('should reset user weapon when resetting game', () => {
    const newState = reducer({ ...state, userWeapon: ROCK }, resetGame());
    expect(newState.userWeapon).toBeNull();
  });

  it('should reset cpu weapon when resetting game', () => {
    const newState = reducer({ ...state, cpuWeapon: ROCK }, resetGame());
    expect(newState.cpuWeapon).toBeNull();
  });

  it('should move game state to selection when resetting game', () => {
    const newState = reducer(state, resetGame());
    expect(newState.gameState).toBe(SELECTION);
  });
});
