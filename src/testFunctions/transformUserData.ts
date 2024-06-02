export const transformUserData = (users: { id: number; firstName: string; lastName: string }[]): any[] => {
  return users.map(user => ({
    userId: user.id,
    fullName: `${user.firstName} ${user.lastName}`.trim(), 
    initials: `${user.firstName[0] ?? ''}${user.lastName[0] ?? ''}` 
  }));
};