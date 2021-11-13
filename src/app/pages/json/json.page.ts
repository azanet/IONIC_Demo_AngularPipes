import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})
export class JsonPage implements OnInit {

  title: string='VALOR a Testear:';
  value: string = 'Valor_Por_Defecto';
  jsonValue = {
    'valorReceived': this.value,
    'author': {
      'name': 'David',
      'surname': 'Freyre Muñoz',
      'moreInfo': {
        'warName': 'Azanet',
        'webSite': 'https://github.com/azanet/'
      }
  
    }
  };







  constructor(private route: ActivatedRoute) {
    if(this.route.snapshot.paramMap.get('value') !== null){
      this.value= this.setValue(this.route.snapshot.paramMap.get('value'));
    }
  }


  ngOnInit() { }

  //Evento ejecutado por el "ionChange"
  setValue(value){
    this.jsonValue = {
      'valorReceived': value,
        'author': {
        'name': 'David',
        'surname': 'Freyre Muñoz',
        'moreInfo': {
          'warName': 'Azanet',
          'webSite': 'https://github.com/azanet/'
        }
    
      }
    };
    return this.value= value;
    
   }
}
