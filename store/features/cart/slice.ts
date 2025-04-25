import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Cart } from 'constants/type';
import { createSelector } from 'reselect';
import { RootState } from 'store';

export interface CartState {
  items: Cart[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const newCart = [...state.items];
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      newCart.splice(itemIndex, 1);
      state.items = newCart;
    },
    emptyCart: (state, _) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

// export const selectCartItemsById = (state: RootState, id: string) =>
//   state.cart.items.filter((item) => item.id === id);

export const makeSelectCartItemsById = (id: string) =>
  createSelector([selectCartItems], (items) => items.filter((item) => item.id === id));

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
