import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { IdbService } from '../services/idb.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { PointsService } from '../services/points.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentDate: number = Date.now();
  user: User;
  login: any;
  interval: any;
  avatar:any;
  
  wrong:number=0;

  constructor(private idb: IdbService,
    public router: Router,
    private pointsService: PointsService) {

      this.interval = setInterval(() => {
        this.wrong = this.pointsService.getPoints();
  
      }, 500);

    }

 
  
  ngOnInit(): void {
    
    this.idb.getUserName().then((name) => {
      this.login=name;
      if(name == null){
        this.login='Imię'
      }
      
    });
    this.idb.getAvatar().then((avatar) => {
      this.avatar = avatar;
      
    });

    
  }



  
}
