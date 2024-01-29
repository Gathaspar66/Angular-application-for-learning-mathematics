import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { TaskService } from '../services/task.service';
import { IdbService } from '../services/idb.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  id: number;
  category: string[];
  correctCategories: string[];
  isCorrect: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpClient, private taskService: TaskService, private idb: IdbService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];

    });
    this.getData();

  }
  getData() {

    this.httpService.get('../assets/list.json').subscribe(
      data => {
        this.category = data as string[];

      }

    );

    this.idb.getScores().then((name) => {
      this.correctCategories = name;
    });

  }
  onSubmit(idCategory) {

    this.taskService.setidCategory(idCategory)

  }

  checkIfCorrect(oneCategory) {

    if (this.correctCategories) {

      return this.correctCategories.includes(oneCategory);
    }


  }
}
