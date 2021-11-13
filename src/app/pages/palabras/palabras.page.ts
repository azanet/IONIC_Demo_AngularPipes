import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.page.html',
  styleUrls: ['./palabras.page.scss'],
})
export class PalabrasPage implements OnInit {

  title: string='VALOR a Testear:';
  value: string = 'ValorPorDefault';
  //Creando array de CADA Caracter de nuestro VALUE
  arrValue: string[]= Array.from(this.value);

  constructor(private route: ActivatedRoute) { 

    if(this.route.snapshot.paramMap.get('value') !== null){
      this.value= this.setValue(this.route.snapshot.paramMap.get('value'));
    }

  }


  ngOnInit() { }

  //Evento ejecutado por el "ionChange"
  setValue(value){
    this.arrValue= Array.from(value);
    return this.value= value;    
   }
}
