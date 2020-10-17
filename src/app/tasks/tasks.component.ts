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
    private httpService: HttpClient
  ) {}
  idCategory: string;
  ngOnInit(): void {
    this.idCategory = this.taskService.getidCategory();
    console.log(this.idCategory);
    this.getData();
  }
  getData() {
    this.httpService.get('../assets/tasks.json').subscribe((data) => {
      this.tasks = data as string[];
    });
  }
}
