import { createAction, props } from '@ngrx/store';
import { UnicornDTO } from '../../shared/models/unicorn.model';

export const addToCart = createAction('[CART] ADD_TO_CART', props<{ unicorn: UnicornDTO }>());
export const removeFromCart = createAction('[CART] REMOVE_FROM_CART', props<{ unicorn: UnicornDTO }>());
export const toggleToCart = createAction('[CART] TOGGLE_TO_CART', props<{ unicorn: UnicornDTO }>());
export const clearCart = createAction('[CART] CLEAR_CART');
