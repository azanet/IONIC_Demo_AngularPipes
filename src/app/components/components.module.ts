import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { InputvalueComponent } from './inputvalue/inputvalue.component';
import { InicioPageRoutingModule } from '../pages/inicio/inicio-routing.module';



@NgModule({
  declarations: [HeaderComponent, MenuComponent,InputvalueComponent],
  imports: [
    CommonModule, IonicModule,InicioPageRoutingModule
  ],
  exports:[HeaderComponent, MenuComponent,InputvalueComponent]
})
export class ComponentsModule { }
