import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-unicorn-details',
  templateUrl: './unicorn-details.component.html',
  styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
  // NEW SCHOOL (Angular 14.2) 👇
  // public id$ = inject(ActivatedRoute).params.pipe(map(params => params['id']));

  public id$ = this.activatedRoute.params.pipe(map(params => params['id']));

  constructor(private activatedRoute: ActivatedRoute) {}

  // OLD SCHOOL 👇
  // public id = '';
  //
  // constructor(activatedRoute: ActivatedRoute) {
  //   activatedRoute.params.subscribe(param => {
  //     this.id = param['id'];
  //   });
  // }
}
