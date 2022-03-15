import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndocrinologistsPage } from './endocrinologists.page';

const routes: Routes = [
  {
    path: '',
    component: EndocrinologistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndocrinologistsPageRoutingModule {}
