import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecializedAboutPageRoutingModule } from './specialized-about-routing.module';

import { SpecializedAboutPage } from './specialized-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecializedAboutPageRoutingModule
  ],
  declarations: [SpecializedAboutPage]
})
export class SpecializedAboutPageModule {}
