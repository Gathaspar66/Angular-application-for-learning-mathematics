import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { IdbService } from '../services/idb.service';

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
  constructor(private idb: IdbService) {

    this.interval = setInterval(() => {
      this.currentDate = Date.now();
      
    }, 1000);
  }

  ngOnInit(): void {
    this.idb.getUserName().then((name) => {
      this.login = name;
    });

    console.log(this.login);
  }
}
