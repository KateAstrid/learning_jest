import { getContentBasedOnPreferences } from "../testFunctions/getContentBasedOnPreferences";

describe('getContentBasedOnPreferences', () => {
  it('returns dark mode content in English', () => {
    const preferences = { darkMode: true, language: 'en' };
    expect(getContentBasedOnPreferences(preferences)).toBe('Dark Mode Content in English');
  });

  it('returns dark mode content for non-English languages', () => {
    const preferences = { darkMode: true, language: 'es' };
    expect(getContentBasedOnPreferences(preferences)).toBe('Dark Mode Content');
  });

  it('returns light mode content in English', () => {
    const preferences = { darkMode: false, language: 'en' };
    expect(getContentBasedOnPreferences(preferences)).toBe('Light Mode Content in English');
  });

  it('returns default content for non-English languages without dark mode', () => {
    const preferences = { darkMode: false, language: 'es' };
    expect(getContentBasedOnPreferences(preferences)).toBe('Default Content');
  });
});
