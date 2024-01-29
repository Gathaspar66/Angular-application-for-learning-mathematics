import { Injectable, OnInit } from '@angular/core';
import Dexie from 'dexie';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class IdbService {
  rows: User[] = [];
  db: any;
  login: any;
  constructor() {
    this.createDb();
    this.connectToDatabase();
  }

  connectToDatabase(): void {
    this.db.open().catch((error) => {
      alert('Errod during connecting to database : ' + error);
    });
  }

  createDb() {
    this.db = new Dexie('LearnApp');
    this.db.version(1).stores({
      scores: '++id, &category_id, is_correct',
      users: '++user_id, name, avatar',
    });
  }

  getDb() {
    return this.db;
  }
  addUser(user: User) {
    this.db.users.add({
      name: user.name,
      avatar: user.avatar,
    });
  }

  public addScores(categoryId: string, isCorrect: boolean) {
    this.db.scores.add({
      category_id: categoryId,
      is_correct: isCorrect,
    });
  }
  public editUser(user: User) {
    this.db.users.update(1, {name: user.name, avatar: user.avatar});
  }

  public counterUsers(){
    return this.db.users.count();
  }

  getUserName(): Promise<any> {
    return this.db.users.get(1).then((res) => res.name);
  }
  getAvatar(): Promise<any> {
    return this.db.users.get(1).then((res) => res.avatar);
  }

  getScores():Promise<any>{
    return this.db.scores.orderBy('category_id').keys('category_id');
  
  }
}
