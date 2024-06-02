export interface Product {
  id: number;
  name: string;
  description: string;
}

export const searchProducts = (products: Product[], query: string): Product[] => {
  query = query.toLowerCase();
  return products.filter(product =>
      product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
  );
};