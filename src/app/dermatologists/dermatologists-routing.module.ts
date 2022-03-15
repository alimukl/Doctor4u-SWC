import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DermatologistsPage } from './dermatologists.page';

const routes: Routes = [
  {
    path: '',
    component: DermatologistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DermatologistsPageRoutingModule {}
