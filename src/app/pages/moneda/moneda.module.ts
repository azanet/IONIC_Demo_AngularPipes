import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonedaPageRoutingModule } from './moneda-routing.module';

import { MonedaPage } from './moneda.page';
import { ComponentsModule } from '../../components/components.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonedaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MonedaPage],
  
//Hay que agregar el PROVIDER, para establecer la MONEDA por DEFECTO QUE QUERAMOS
  providers:[{provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }]
})
export class MonedaPageModule {}
