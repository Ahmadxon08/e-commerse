// export type CartItem = {
//     id: number;
//     quantity: number;
// };
export type CartType = {
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
  image: string;
};

export type CartStoreType = {
  cartItems: CartType[];
  handleAddToCart: (item: CartType) => void;
  handleRemoveFromCart: (item: CartType) => void;
};
