import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { IdbService } from '../services/idb.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
})
export class StartPageComponent implements OnInit {
  user: User = new User();
  constructor(private idb: IdbService, private route: Router) {}

  ngOnInit(): void {}

  createUser() {
    this.idb.addUser(this.user);

    this.route.navigate(['/category']);
  }

  isClicked: boolean;
  isClicked1: boolean;
  isClicked2: boolean;

  tak(boolean) {
    this.isClicked = true;
    this.isClicked1 = false;
    this.isClicked2 = false;
  }

  tak1(boolean) {
    this.isClicked = false;
    this.isClicked1 = true;
    this.isClicked2 = false;
  }

  tak2(boolean) {
    this.isClicked = false;
    this.isClicked1 = false;
    this.isClicked2 = true;
  }
}
