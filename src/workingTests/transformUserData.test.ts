import { transformUserData } from "../testFunctions/transformUserData";

describe('transformUserData', () => {
  it('transforms user data correctly', () => {
    const users = [
      { id: 1, firstName: 'Alice', lastName: 'Smith' },
      { id: 2, firstName: 'Bob', lastName: 'Johnson' },
      { id: 3, firstName: 'Carol', lastName: '' } // edge case with missing last name
    ];

    const expected = [
      { userId: 1, fullName: 'Alice Smith', initials: 'AS' },
      { userId: 2, fullName: 'Bob Johnson', initials: 'BJ' },
      { userId: 3, fullName: 'Carol', initials: 'C' } // handling missing last name
    ];

    const result = transformUserData(users);
    expect(result).toEqual(expected);
  });

  it('handles users with empty first and last names', () => {
    const emptyUsers = [
      { id: 4, firstName: '', lastName: '' }
    ];
    const expected = [
      { userId: 4, fullName: '', initials: '' } // handling completely empty names
    ];

    const result = transformUserData(emptyUsers);
    expect(result).toEqual(expected);
  });

  it('processes an empty array without error', () => {
    const result = transformUserData([]);
    expect(result).toEqual([]);
  });
});
