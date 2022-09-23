import { createAction, props } from '@ngrx/store';
import { Unicorn, UnicornDTO } from '../../shared/models/unicorn.model';

// 🎯 getUnicorns
export const getUnicorns = createAction('[Unicorns] GET_UNICORNS');
export const getUnicornsSuccess = createAction('[Unicorns] GET_UNICORNS_SUCCESS', props<{ unicorns: UnicornDTO[] }>());
export const getUnicornsError = createAction('[Unicorns] GET_UNICORNS_ERROR');

// 🎯 getUnicorn
export const getUnicorn = createAction('[Unicorns] GET_UNICORN', props<{ id: number }>());
export const getUnicornSuccess = createAction('[Unicorns] GET_UNICORN_SUCCESS', props<{ unicorn: UnicornDTO }>());
export const getUnicornError = createAction('[Unicorns] GET_UNICORN_ERROR');

// 🎯 updateUnicorn
export const updateUnicorn = createAction('[Unicorns] UPDATE_UNICORN', props<{ unicorn: Unicorn }>());
export const updateUnicornSuccess = createAction('[Unicorns] UPDATE_UNICORN_SUCCESS', props<{ unicorn: UnicornDTO }>());
export const updateUnicornError = createAction('[Unicorns] UPDATE_UNICORN_ERROR');

// 🎯 deleteUnicorn
export const deleteUnicorn = createAction('[Unicorns] DELETE_UNICORN', props<{ unicorn: UnicornDTO }>());
export const deleteUnicornSuccess = createAction('[Unicorns] DELETE_UNICORN_SUCCESS', props<{ unicorn: UnicornDTO }>());
export const deleteUnicornError = createAction('[Unicorns] DELETE_UNICORN_ERROR');
