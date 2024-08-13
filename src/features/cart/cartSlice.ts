import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/Product';

interface CartState {
  items: Product[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeItem(state, action: PayloadAction<number>) {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.totalAmount -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
