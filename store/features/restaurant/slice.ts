import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from 'constants/type';
import { RootState } from 'store';

export interface RestaurantState {
  restaurant: Restaurant | null;
}

const initialState: RestaurantState = {
  restaurant: null,
};

export const RestaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = RestaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export default RestaurantSlice.reducer;
