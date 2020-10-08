import { Component } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inzynierka';
  constructor(public router: Router){}
  
    
}
