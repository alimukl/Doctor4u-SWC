import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllergistsPageRoutingModule } from './allergists-routing.module';

import { AllergistsPage } from './allergists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllergistsPageRoutingModule
  ],
  declarations: [AllergistsPage]
})
export class AllergistsPageModule {}
