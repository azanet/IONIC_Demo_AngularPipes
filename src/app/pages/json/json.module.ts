import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsonPageRoutingModule } from './json-routing.module';

import { JsonPage } from './json.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [JsonPage]
})
export class JsonPageModule {}
