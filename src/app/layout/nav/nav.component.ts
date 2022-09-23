import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartDispatchers } from '../../store/dispatchers/cart.dispatchers';
import { CartSelectors } from '../../store/selectors/cart.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  public cartSize$ = this._cartSelectors.cartSize$;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly _cartSelectors: CartSelectors,
    private readonly _cartDispatchers: CartDispatchers
  ) {}

  public cleanCart(): void {
    this._cartDispatchers.clearCart();
  }
}
