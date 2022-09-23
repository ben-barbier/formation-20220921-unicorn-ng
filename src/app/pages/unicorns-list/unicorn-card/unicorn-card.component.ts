import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UnicornDTO } from '../../../shared/models/unicorn.model';
import { CartDispatchers } from '../../../store/dispatchers/cart.dispatchers';
import { UnicornsDispatchers } from '../../../store/dispatchers/unicorns.dispatchers';
import { CartSelectors } from '../../../store/selectors/cart.selectors';
import { EditUnicornComponent } from './edit-unicorn/edit-unicorn.component';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnInit {
  @Input() public unicorn!: UnicornDTO;

  public isInCart$: Observable<boolean> | undefined;

  ngOnInit(): void {
    this.isInCart$ = this._cartSelectors.isInCart$(this.unicorn);
  }

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _unicornsDispatchers: UnicornsDispatchers,
    private readonly _cartDispatchers: CartDispatchers,
    private readonly _cartSelectors: CartSelectors
  ) {}

  public toggleToCart(unicorn: UnicornDTO): void {
    this._cartDispatchers.toggleToCart(unicorn);
  }

  public deleteUnicorn(unicorn: UnicornDTO): void {
    this._unicornsDispatchers.deleteUnicorn(unicorn);
  }

  public openEditDialog(): void {
    this._dialog.open(EditUnicornComponent, { data: { unicorn: this.unicorn } });
  }
}
