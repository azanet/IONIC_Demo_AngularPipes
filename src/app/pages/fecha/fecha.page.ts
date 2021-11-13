import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.page.html',
  styleUrls: ['./fecha.page.scss'],
})
export class FechaPage implements OnInit {

  dateValue: string= String(new Date());
  
  ngOnInit() {  }

  constructor(private route: ActivatedRoute) {

    if(this.route.snapshot.paramMap.get('value') !== null){
      this.dateValue= this.setValue(this.route.snapshot.paramMap.get('value'));
    }

 }


 setValue(value){
  return this.dateValue= value;
 }

}
