import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnicornDTO } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart$ = new BehaviorSubject<UnicornDTO[]>([]);
  public cart$ = this._cart$.asObservable();

  public clearCart(): void {
    this._cart$.next([]);
  }

  public toggleToCart(unicorn: UnicornDTO): void {
    const cart = this._cart$.getValue();
    const isInCart = cart.some(u => u.id === unicorn.id);
    if (isInCart) {
      this._cart$.next(cart.filter(u => u.id !== unicorn.id));
    } else {
      this._cart$.next([...cart, unicorn]);
    }
  }
}
