import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MuseumitemsComponent } from 'src/app/pages/museumitems/museumitems.component';

const routes: Routes = [
  {path: 'museum', component: MuseumitemsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'museum'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
