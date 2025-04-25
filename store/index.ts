import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/slice';
import restaurantReducer from './features/restaurant/slice';
export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
