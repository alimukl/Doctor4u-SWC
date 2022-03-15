import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPatientPageRoutingModule } from './admin-patient-routing.module';

import { AdminPatientPage } from './admin-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPatientPageRoutingModule
  ],
  declarations: [AdminPatientPage]
})
export class AdminPatientPageModule {}
