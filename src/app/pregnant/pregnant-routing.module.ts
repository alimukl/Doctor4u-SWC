import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PregnantPage } from './pregnant.page';

const routes: Routes = [
  {
    path: '',
    component: PregnantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PregnantPageRoutingModule {}
