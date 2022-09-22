import { Component, inject } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorns-list',
  templateUrl: './unicorns-list.component.html',
  styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent {
  public unicorns$ = inject(UnicornsService).getAllWithCapacitiesLabels();

  public trackById = (index: number, unicorn: Unicorn) => unicorn.id;

  public deleteUnicorn(unicorn: Unicorn): void {
    // TODO
  }
}
