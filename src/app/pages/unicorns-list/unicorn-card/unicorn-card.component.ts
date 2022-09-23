import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { EditUnicornComponent } from './edit-unicorn/edit-unicorn.component';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
  @Input() public unicorn!: Unicorn;

  public isInCart$ = this._cartService.cart$.pipe(map(cart => cart.some(u => u.id === this.unicorn.id)));

  constructor(private readonly _dialog: MatDialog, private readonly _cartService: CartService) {}

  public toggleToCart(unicorn: Unicorn): void {
    this._cartService.toggleToCart(unicorn);
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    // TODO: implement...
  }

  public openEditDialog(): void {
    this._dialog.open(EditUnicornComponent, { data: { unicorn: this.unicorn } });
  }
}
