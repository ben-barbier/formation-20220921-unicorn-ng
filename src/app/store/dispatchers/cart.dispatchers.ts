import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UnicornDTO } from '../../shared/models/unicorn.model';
import { addToCart, clearCart, removeFromCart, toggleToCart } from '../actions/cart.actions';
import { EntityState } from '../reducers';

@Injectable({ providedIn: 'root' })
export class CartDispatchers {
  constructor(private store: Store<EntityState>) {}

  public addToCart(unicorn: UnicornDTO): void {
    this.store.dispatch(addToCart({ unicorn }));
  }

  public removeFromCart(unicorn: UnicornDTO): void {
    this.store.dispatch(removeFromCart({ unicorn }));
  }

  public toggleToCart(unicorn: UnicornDTO): void {
    this.store.dispatch(toggleToCart({ unicorn }));
  }

  public clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
