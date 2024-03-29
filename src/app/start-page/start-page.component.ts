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
  counter : number;
  constructor(private idb: IdbService, private route: Router) {}

  ngOnInit(): void {
    this.nie();
  }

  async createUser() {
    
   
    if (await this.idb.counterUsers() == 0) {
      this.idb.addUser(this.user);
      
    } else {
      this.idb.editUser(this.user);

    }
    console.log(this.idb.counterUsers());
    this.route.navigate(['/category']);
  }

  isClicked: string;
  avatar:string;
  nie(){
    this.user.avatar='fa fa-wheelchair';
    
  }
  

  tak(avatar) {
    this.isClicked = avatar;
   this.user.avatar=avatar;
   
}
}
