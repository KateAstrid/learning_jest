export const getContentBasedOnPreferences = (preferences: { darkMode: boolean; language: string }): string => {
  if (preferences.darkMode && preferences.language === 'en') {
      return 'Dark Mode Content in English';
  } else if (preferences.darkMode) {
      return 'Dark Mode Content';
  } else if (preferences.language === 'en') {
      return 'Light Mode Content in English';
  } else {
      return 'Default Content';
  }
};

