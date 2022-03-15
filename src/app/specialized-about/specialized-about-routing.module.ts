import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecializedAboutPage } from './specialized-about.page';

const routes: Routes = [
  {
    path: '',
    component: SpecializedAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecializedAboutPageRoutingModule {}
