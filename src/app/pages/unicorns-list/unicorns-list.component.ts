import { Component } from '@angular/core';
import { UnicornDTO } from '../../shared/models/unicorn.model';
import { UnicornsDispatchers } from '../../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from '../../store/selectors/unicorns.selectors';

@Component({
  selector: 'app-unicorns-list',
  templateUrl: './unicorns-list.component.html',
  styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent {
  public unicorns$ = this._unicornsSelectors.unicorns$;

  public trackById = (index: number, unicorn: UnicornDTO) => unicorn.id;

  constructor(private readonly _unicornsDispatchers: UnicornsDispatchers, private readonly _unicornsSelectors: UnicornsSelectors) {
    this._unicornsDispatchers.getUnicorns();
  }
}
