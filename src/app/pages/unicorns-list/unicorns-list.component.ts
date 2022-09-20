import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorns-list',
  templateUrl: './unicorns-list.component.html',
  styleUrls: ['./unicorns-list.component.scss'],
  imports: [AsyncPipe, JsonPipe],
  standalone: true,
})
export class UnicornsListComponent {
  public unicorns$ = inject(UnicornsService).getAll();
}
