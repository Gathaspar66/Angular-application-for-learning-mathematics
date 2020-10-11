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
  // jsonTask = (jsonTasks as any).tasks;
  //jsonClass = (jsonClass as any).class;
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
      scores: 'task_id, score, user_id',
      users: '++user_id, name, avatar',
    });
  }

  getDb() {
    return this.db;
  }
  addUser(user: User) {
    this.db.users.add({
      name: user.name,
      avatar: 'aaa',
    });
  }

  public addScores(taskId: number, userId: number) {
    this.db.scores.add({
      user_id: userId,
      task_id: taskId,
    });
  }

  getUserName(): Promise<any> {
    return this.db.users.get(1).then((res) => res.name);
  }
}
