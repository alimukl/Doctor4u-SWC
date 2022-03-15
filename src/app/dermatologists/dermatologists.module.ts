import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DermatologistsPageRoutingModule } from './dermatologists-routing.module';

import { DermatologistsPage } from './dermatologists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DermatologistsPageRoutingModule
  ],
  declarations: [DermatologistsPage]
})
export class DermatologistsPageModule {}
