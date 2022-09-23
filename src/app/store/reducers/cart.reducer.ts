import { createReducer, on } from '@ngrx/store';
import { addToCart, clearCart, removeFromCart, toggleToCart } from '../actions/cart.actions';
import { deleteUnicornSuccess } from '../actions/unicorns.actions';

const initialState: number[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { unicorn }) => [...state, unicorn.id]),
  on(removeFromCart, (state, { unicorn }) => state.filter(u => u !== unicorn.id)),
  on(toggleToCart, (state, { unicorn }) => {
    if (state.some(u => unicorn.id === u)) {
      return state.filter(u => u !== unicorn.id);
    } else {
      return [...state, unicorn.id];
    }
  }),
  on(clearCart, () => []),
  on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u !== unicorn.id)) //✨✨✨
);
