import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: string[];
  constructor(
    private taskService: TaskService,
    private httpService: HttpClient,
    
  ) {}
  idCategory: string;
  ngOnInit(): void {
    this.idCategory = this.taskService.getidCategory();
    this.getData();
    this.getRandomInt(1, 3);
  }
  getData() {
    this.httpService.get('../assets/tasks.json').subscribe((data) => {
      this.tasks = data as string[];
    });
  }

  temp: number;
points:number=0;
wrong:number=0;
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.temp = Math.floor(Math.random() * (max - min)) + min;

    return this.temp;
  }
  checkAnswer(number, correct_answer) {
    if (number == correct_answer) {
      
      this.points++;
    }else{
      this.wrong++;
    }
    
    this.getRandomInt(1, 3);
  }

}
