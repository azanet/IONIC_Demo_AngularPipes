import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalabrasPageRoutingModule } from './palabras-routing.module';

import { PalabrasPage } from './palabras.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalabrasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PalabrasPage]
})
export class PalabrasPageModule {}
