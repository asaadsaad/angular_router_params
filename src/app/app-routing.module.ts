import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a.component';
import { BComponent } from './b.component';

const routes: Routes = [
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
