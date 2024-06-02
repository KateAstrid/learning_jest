import { fetchUserData } from "../testFunctions/fetchUserData";

// mock the global fetch
global.fetch = jest.fn();

// ensures that each test runs with a fresh mock state
beforeEach(() => {
  jest.resetAllMocks();
});

describe('fetchUserData', () => {
  it('fetches user data successfully from an API', async () => {
    const mockUser = { id: 1, name: 'John Doe' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockUser)
    });

    const result = await fetchUserData(1);
    expect(result).toEqual(mockUser);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
  });

  it('throws an error when the API call fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch user data'));

    await expect(fetchUserData(1)).rejects.toThrow('Failed to fetch user data');
  });

  it('throws an error for non-200 responses', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve({})
    });

    await expect(fetchUserData(1)).rejects.toThrow('Failed to fetch user data');
  });
});
