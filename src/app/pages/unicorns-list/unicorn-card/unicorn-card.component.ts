import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { EditUnicornComponent } from './edit-unicorn/edit-unicorn.component';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {
  @Input() public unicorn!: Unicorn;

  public isInCart$: Observable<boolean> | undefined;

  constructor(private readonly _dialog: MatDialog) {}

  public toggleToCart(unicorn: Unicorn): void {
    // TODO: implement...
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    // TODO: implement...
  }

  public openEditDialog(): void {
    this._dialog.open(EditUnicornComponent, { data: { unicorn: this.unicorn } });
  }
}
