import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndocrinologistsPageRoutingModule } from './endocrinologists-routing.module';

import { EndocrinologistsPage } from './endocrinologists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndocrinologistsPageRoutingModule
  ],
  declarations: [EndocrinologistsPage]
})
export class EndocrinologistsPageModule {}
