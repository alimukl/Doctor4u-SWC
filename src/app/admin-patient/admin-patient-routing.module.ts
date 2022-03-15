import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPatientPage } from './admin-patient.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPatientPageRoutingModule {}
