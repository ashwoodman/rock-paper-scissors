import { calculateResult } from './result';
import { ROCK, PAPER, SCISSORS } from '../constants/weaponTypes';
import { WIN, DRAW, LOSE } from '../constants/results';

describe('result utility', () => {
  it('should return win for rock vs scissors', () => {
    const result = calculateResult(ROCK, SCISSORS);
    expect(result).toBe(WIN);
  });

  it('should return win for paper vs rock', () => {
    const result = calculateResult(PAPER, ROCK);
    expect(result).toBe(WIN);
  });

  it('should return win for scissors vs paper', () => {
    const result = calculateResult(SCISSORS, PAPER);
    expect(result).toBe(WIN);
  });

  it('should return draw for rock vs rock', () => {
    const result = calculateResult(ROCK, ROCK);
    expect(result).toBe(DRAW);
  });

  it('should return draw for paper vs paper', () => {
    const result = calculateResult(PAPER, PAPER);
    expect(result).toBe(DRAW);
  });

  it('should return draw for scissors vs scissors', () => {
    const result = calculateResult(SCISSORS, SCISSORS);
    expect(result).toBe(DRAW);
  });

  it('should return lose for rock vs paper', () => {
    const result = calculateResult(ROCK, PAPER);
    expect(result).toBe(LOSE);
  });

  it('should return lose for paper vs scissors', () => {
    const result = calculateResult(PAPER, SCISSORS);
    expect(result).toBe(LOSE);
  });

  it('should return lose for scissors vs rock', () => {
    const result = calculateResult(SCISSORS, ROCK);
    expect(result).toBe(LOSE);
  });
});
