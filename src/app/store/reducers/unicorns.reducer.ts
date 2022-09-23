import { createReducer, on } from '@ngrx/store';
import { UnicornDTO } from '../../shared/models/unicorn.model';
import { deleteUnicornSuccess, getUnicornsSuccess, getUnicornSuccess, updateUnicornSuccess } from '../actions/unicorns.actions';

const initialState: UnicornDTO[] = [];

export const unicornsReducer = createReducer(
  initialState,
  on(getUnicornsSuccess, (state, { unicorns }) => unicorns),
  on(updateUnicornSuccess, (state, { unicorn }) => state.map(u => (u.id === unicorn.id ? unicorn : u))),
  on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
  on(getUnicornSuccess, (state, { unicorn }) => {
    const unicornIsPresent = state.some(u => u.id === unicorn.id);
    if (unicornIsPresent) {
      return state.map(u => (u.id === unicorn.id ? unicorn : u));
    } else {
      return state.concat(unicorn);
    }
  })
);
