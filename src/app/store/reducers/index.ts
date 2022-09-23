import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { UnicornDTO } from '../../shared/models/unicorn.model';
import { cartReducer } from './cart.reducer';
import { unicornsReducer } from './unicorns.reducer';

export interface EntityState {
  unicorns: UnicornDTO[];
  cart: number[]; // Identifiants de licornes
}

export const reducers: ActionReducerMap<EntityState> = {
  unicorns: unicornsReducer,
  cart: cartReducer,
  // here is where i put other reducers, when i have them
};

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

const localStorageSyncReducer = (reducer: ActionReducer<EntityState>): ActionReducer<EntityState> => {
  return localStorageSync({ keys: ['unicorns', 'cart'], rehydrate: true })(reducer);
};

export const metaReducers: MetaReducer<EntityState, Action>[] = [localStorageSyncReducer];
