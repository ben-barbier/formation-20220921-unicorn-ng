import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UnicornDTO } from '../../shared/models/unicorn.model';
import { EntityState } from '../reducers';
import { getUnicorns } from './unicorns.selectors';

// selectors
const getCart = createFeatureSelector<number[]>('cart');
const getUnicornsInCart = createSelector(getCart, getUnicorns, (cart, unicorns) => {
  return cart.map(unicornId => unicorns.find(u => u.id === unicornId)) as UnicornDTO[];
});
const cartSize = createSelector(getCart, cart => cart.length);
const isInCart = (unicorn: UnicornDTO) => createSelector(getCart, (state: number[]) => state.some(u => u === unicorn.id));

@Injectable({ providedIn: 'root' })
export class CartSelectors {
  constructor(private store: Store<EntityState>) {}

  cart$: Observable<UnicornDTO[]> = this.store.select(getUnicornsInCart);
  cartSize$: Observable<number> = this.store.select(cartSize);
  isInCart$: (unicorn: UnicornDTO) => Observable<boolean> = (unicorn: UnicornDTO) => this.store.select(isInCart(unicorn));
}
