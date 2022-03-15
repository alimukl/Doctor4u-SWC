import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvulationCalenderPage } from './ovulation-calender.page';

const routes: Routes = [
  {
    path: '',
    component: OvulationCalenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvulationCalenderPageRoutingModule {}
