import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';


interface MisPaginas{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  dateValue= String(new Date());
  
  
constructor() { }  
ngOnInit() {}

  closeApp(){
    App.exitApp();
  }





  misPaginas: MisPaginas[]= [
    {
      icon: 'home',
      name: 'Home',
      redirectTo: '/inicio'
    },
    {
      icon: 'cash',
      name: 'Moneda',
      redirectTo: '/moneda'
    },
    {
      icon: 'color-filter',
      name: 'Decimales',
      redirectTo: '/numeros'
    },
    {
      icon: 'calculator',
      name: 'Porcentajes',
      redirectTo: '/percent'
    },
    {
      icon: 'calendar',
      name: 'Fecha Actual',
      redirectTo: '/fecha/'+this.dateValue
    },
    {
      icon: 'file-tray-full',
      name: 'Palabras-Slices',
      redirectTo: '/palabras'
    },
    {
      icon: 'document-text',
      name: 'JSON',
      redirectTo: '/json'
    },
  ];
}





