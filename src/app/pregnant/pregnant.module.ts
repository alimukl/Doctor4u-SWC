import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregnantPageRoutingModule } from './pregnant-routing.module';

import { PregnantPage } from './pregnant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregnantPageRoutingModule
  ],
  declarations: [PregnantPage]
})
export class PregnantPageModule {}
