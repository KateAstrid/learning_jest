import { add } from "../testFunctions/add";

describe('add', () => {
  it('adds two positive numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('adds two negative numbers correctly', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  it('adds a positive number and a negative number correctly', () => {
    expect(add(-1, 2)).toBe(1);
  });

  it('adds zero correctly', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  it('adds decimal numbers correctly', () => {
    expect(add(1.5, 2.3)).toBe(3.8);
  });

  it('handles large numbers correctly', () => {
    expect(add(1000000, 1000000)).toBe(2000000);
  });
});
