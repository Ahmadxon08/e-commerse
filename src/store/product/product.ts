// import { error } from "console";
import { create } from "zustand";

const productStore = (set: any) => ({
  loading: true,
  products: [],
  error: null,
  fetchProducts: async () => {
    // set({ loading: true });
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      set({ products: data.products });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  },
  fetchSecondy: async () => {
    // set({ loading: true });
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      set({ products: data.products });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  },
});

const useProductStore = create(productStore);

export default useProductStore;
