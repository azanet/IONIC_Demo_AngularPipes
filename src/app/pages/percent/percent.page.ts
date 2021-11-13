import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-percent',
  templateUrl: './percent.page.html',
  styleUrls: ['./percent.page.scss'],
})
export class PercentPage implements OnInit {

  title: string='VALOR a Testear:';
  value: string = '0';
  
  constructor(private route: ActivatedRoute) {
    
    if(this.route.snapshot.paramMap.get('value') !== null){
      this.value= this.setValue(this.route.snapshot.paramMap.get('value'));
    }
   }
  
  
  ngOnInit() {}
  
  //Evento ejecutado por el "ionChange"
  setValue(value){
  
      this.value= ((value.replace(/([^0-9\.]{1,})/g, '')).replace(/([^\.0-9]*)([0-9]*)(\.)([0-9]*)(\.{1,})([0-9]*)(.*)/g, '$2$3$4$6'));
  
      if (this.value === ''){
        this.value = '0';
      }else if (this.value === '.'){
        this.value = '0.';
      }
      return this.value;
   }
}
