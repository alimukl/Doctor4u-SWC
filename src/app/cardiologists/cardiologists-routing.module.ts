import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiologistsPage } from './cardiologists.page';

const routes: Routes = [
  {
    path: '',
    component: CardiologistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiologistsPageRoutingModule {}
