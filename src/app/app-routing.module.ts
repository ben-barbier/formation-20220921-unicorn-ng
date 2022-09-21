import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';

const routes: Routes = [
  { path: 'unicorns', component: UnicornsListComponent },
  { path: 'unicorn/:id', component: UnicornDetailsComponent },
  { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
