export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[] | string;
  image: string
};

export type ProductStoreType = {
  loading: boolean;
  products: ProductType[];
  error: string | null | unknown;
  fetchProducts: () => void;
};
