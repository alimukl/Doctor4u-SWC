import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvulationCalenderPageRoutingModule } from './ovulation-calender-routing.module';

import { OvulationCalenderPage } from './ovulation-calender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvulationCalenderPageRoutingModule
  ],
  declarations: [OvulationCalenderPage]
})
export class OvulationCalenderPageModule {}
