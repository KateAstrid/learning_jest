import { isValidToken } from "../testFunctions/isValidToken";

describe('isValidToken', () => {
  it('returns true for valid tokens', () => {
    expect(isValidToken('1234567890123456')).toBe(true); // only numbers
    expect(isValidToken('abcdefABCDEF1234')).toBe(true); // mixed alphanumeric
  });

  it('returns false for tokens that are too short', () => {
    expect(isValidToken('123456789012345')).toBe(false); // 15 characters
  });

  it('returns false for tokens that are too long', () => {
    expect(isValidToken('12345678901234567')).toBe(false); // 17 characters
  });

  it('returns false for tokens with non-alphanumeric characters', () => {
    expect(isValidToken('123456789012345@')).toBe(false); // non-alphanumeric character
    expect(isValidToken('123456789012345_')).toBe(false); // underscore
  });

  it('returns false for tokens with spaces', () => {
    expect(isValidToken('12345678 90123456')).toBe(false); // space in the token
  });

  it('returns false for empty strings', () => {
    expect(isValidToken('')).toBe(false); // empty string
  });
});
