export const isValidToken = (token: string): boolean => {
  return token.length === 16 && /^[a-zA-Z0-9]+$/.test(token);
};