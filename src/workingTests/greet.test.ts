import { greet } from "../testFunctions/greet";

describe('greet', () => {
  it('returns a greeting message for a valid name', () => {
    const name = 'Alice';
    const expectedGreeting = 'Hello, Alice!';
    expect(greet(name)).toBe(expectedGreeting);
  });

  it('throws an error when name is empty', () => {
    expect(() => greet('')).toThrow("Name is required");
  });

  it('throws an error when name is only whitespace', () => {
    expect(() => greet('   ')).toThrow("Name is required");
  });

  it('handles names with extra spaces correctly', () => {
    const name = '  Bob  ';
    const expectedGreeting = 'Hello, Bob!';
    expect(greet(name.trim())).toBe(expectedGreeting);
  });
});
