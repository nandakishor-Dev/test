import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './cartSlice'; // Import CartState if needed
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;