import { create } from "zustand";

export interface CartStore {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (productId: number) => void;
}

interface CartItem {
  productId: number;
  quantity: number;
  itemPrice: number;
  productName: string;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addToCart: (newItem: CartItem) =>
    set((state) => {
      const productInCart = state.items.find(
        (item) => item.productId === newItem.productId,
      );
      if (productInCart) {
        const newItems = state.items.map((item) =>
          item.productId === newItem.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { items: newItems };
      } else {
        return {
          items: [
            ...state.items,
            {
              productId: newItem.productId,
              quantity: 1,
              itemPrice: newItem.itemPrice,
              productName: newItem.productName,
            },
          ],
        };
      }
    }),

  removeItem: (productId: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }));
  },
}));
