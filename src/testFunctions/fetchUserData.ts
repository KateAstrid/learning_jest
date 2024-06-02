export interface User {
  id: number;
  name: string;
}

export const fetchUserData = async (userId: number): Promise<User> => {
  try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      if (!response.ok) {
          throw new Error('Failed to fetch user data');
      }
      return response.json();
  } catch (error: any) {
      throw new Error(error.message);
  }
};