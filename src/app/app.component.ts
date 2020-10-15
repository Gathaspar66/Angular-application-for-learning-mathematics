import { Component } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inzynierka';
  constructor(public router: Router){
    this.category=[1,2,3];
  }
  category:Array<number>;
  
    
}
