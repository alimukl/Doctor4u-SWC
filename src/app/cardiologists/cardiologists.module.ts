import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiologistsPageRoutingModule } from './cardiologists-routing.module';

import { CardiologistsPage } from './cardiologists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiologistsPageRoutingModule
  ],
  declarations: [CardiologistsPage]
})
export class CardiologistsPageModule {}
