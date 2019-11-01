import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@NgModule({
  declarations: [ HeaderComponent ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
