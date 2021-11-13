import { Component, OnInit, Input } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() backBtn: string;

  constructor() {

   }

  ngOnInit() {}


}
