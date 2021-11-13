import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';


@Component({
  selector: 'app-inputvalue',
  templateUrl: './inputvalue.component.html',
  styleUrls: ['./inputvalue.component.scss'],
})
export class InputvalueComponent implements OnInit {
  
  //Evento para emitir valor de 'value' cada vez que cambia aquí
  @Output() propagar = new EventEmitter<string>();
  @Input() value: string = '';
  @Input() title: string = 'VALOR a Enviar:';
   

  constructor() { }

  ngOnInit() {}

//Evento ejecutado por el "ionChange"
  
setValue(event){
  this.value= event.detail.value;
  this.propagar.emit(this.value);
}


 resetValue(){
  this.value='';
}


}
