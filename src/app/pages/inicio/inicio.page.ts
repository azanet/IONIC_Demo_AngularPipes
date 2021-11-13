import { Component, OnInit } from '@angular/core';


interface MisPaginas{
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})




export class InicioPage implements OnInit{
  
  dateValue: string= String(new Date());
  value: string = '';

  //El componente lo Inicializaremos al principio ya que lo iremos refrescando
  misPaginas: MisPaginas[];

  constructor() {
    this.setMisPaginas();
   }

  //Iniciamos la Lista de 'misPAGINAS' NADA MAS EMPEZAR
  ngOnInit() {
    
  }


//Evento ejecutado por el "ionChange del 'inputvalue'"
  setValue(value){
   this.value= value;
   this.setMisPaginas();
  }


  private setMisPaginas(){

    var valueAux: string= 'ValorPorDefault';
    //Por si 'value está vacio que envíe algo'
    if(this.value !== ''){
      valueAux = this.value;
    }


    this.misPaginas = [
      {
        icon: 'cash-outline',
        name: 'Moneda',
        redirectTo: '/moneda/'+valueAux
      },
      {
        icon: 'color-filter-outline',
        name: 'Decimales',
        redirectTo: '/numeros/'+valueAux
      },
      {
        icon: 'calculator-outline',
        name: 'Porcentajes',
        redirectTo: '/percent/'+valueAux
      },
      {
        icon: 'calendar-outline',
        name: 'Fecha Actual',
        redirectTo: '/fecha/'+this.dateValue
      },
      {
        icon: 'file-tray-full-outline',
        name: 'Palabras-Slices',
        redirectTo: '/palabras/'+valueAux
      },
      {
        icon: 'document-text-outline',
        name: 'JSON',
        redirectTo: '/json/'+valueAux
      },
    ];
  }




}
