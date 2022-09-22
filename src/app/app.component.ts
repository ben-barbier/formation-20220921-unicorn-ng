import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const o1: Observable<string> = of('bob'); // 1 élément
    const o2: Observable<string[]> = of(['bob', 'alice']); // 1 tableau avec 'bob' et 'alice' dedans
    const o3: Observable<string> = from(['bob', 'alice', 'sacha']); // 'bob' puis 'alice' (2 éléments)

    const i1 = new FormControl<string>('');
    const i2 = new FormControl<string>('');
  }
}
