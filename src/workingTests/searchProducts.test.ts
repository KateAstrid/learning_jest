import { Product, searchProducts } from "../testFunctions/searchProduct";

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Alpha Toolset', description: 'A comprehensive set of tools for professionals' },
  { id: 2, name: 'Beta Wrench', description: 'A versatile wrench for various applications' },
  { id: 3, name: 'Gamma Hammer', description: 'Heavy duty hammer - tool for construction work' }
];

describe('searchProducts', () => {
  it('finds products by name case-insensitively', () => {
    const result = searchProducts(MOCK_PRODUCTS, 'alpha');
    expect(result).toEqual([MOCK_PRODUCTS[0]]);
  });

  it('finds products by description case-insensitively', () => {
    const result = searchProducts(MOCK_PRODUCTS, 'versatile');
    expect(result).toEqual([MOCK_PRODUCTS[1]]);
  });

  it('returns multiple products if multiple matches are found', () => {
    const result = searchProducts(MOCK_PRODUCTS, 'tool');
    expect(result).toEqual([MOCK_PRODUCTS[0], MOCK_PRODUCTS[2]]);
  });

  it('returns an empty array if no matches are found', () => {
    const result = searchProducts(MOCK_PRODUCTS, 'xyz');
    expect(result).toHaveLength(0);
  });

  it('handles queries that match partially', () => {
    const result = searchProducts(MOCK_PRODUCTS, 'ham');
    expect(result).toEqual([MOCK_PRODUCTS[2]]);
  });

  it('returns all products when the query is empty', () => {
    const result = searchProducts(MOCK_PRODUCTS, '');
    expect(result).toEqual(MOCK_PRODUCTS);
  });
});
