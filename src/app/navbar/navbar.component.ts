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
  user: User;
  login: any;
  constructor(private idb: IdbService) {}

  ngOnInit(): void {
    this.idb.getUserName().then((name) => {
      this.login = name;
    });

    console.log(this.login);
  }
}
