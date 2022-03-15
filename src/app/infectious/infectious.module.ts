import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfectiousPageRoutingModule } from './infectious-routing.module';

import { InfectiousPage } from './infectious.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfectiousPageRoutingModule
  ],
  declarations: [InfectiousPage]
})
export class InfectiousPageModule {}
