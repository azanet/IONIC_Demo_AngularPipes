import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercentPageRoutingModule } from './percent-routing.module';

import { PercentPage } from './percent.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PercentPage]
})
export class PercentPageModule {}
