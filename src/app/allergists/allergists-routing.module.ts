import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllergistsPage } from './allergists.page';

const routes: Routes = [
  {
    path: '',
    component: AllergistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllergistsPageRoutingModule {}
