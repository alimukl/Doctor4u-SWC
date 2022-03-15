import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfectiousPage } from './infectious.page';

const routes: Routes = [
  {
    path: '',
    component: InfectiousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfectiousPageRoutingModule {}
