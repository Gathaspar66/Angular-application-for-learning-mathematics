import { Component, OnInit, TemplateRef } from '@angular/core';
import { TaskService } from '../services/task.service';
import { HttpClient } from '@angular/common/http';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IdbService } from '../services/idb.service';
import { PointsService } from '../services/points.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  modalRef: BsModalRef;
  tasks: string[];
  constructor(
    private taskService: TaskService,
    private httpService: HttpClient,
    private modalService: BsModalService,
    private idb: IdbService,
    private pointsService:PointsService
  ) {}
  idCategory: string;
  ngOnInit(): void {
    this.idCategory = this.taskService.getidCategory();
    this.pointsService.setPoints(this.wrong)
    this.getData();
    this.getRandomInt(1, 3);
  }
  getData() {
    this.httpService.get('../assets/tasks.json').subscribe((data) => {
      this.tasks = data as string[];
    });
  }
  numberFromInput: number;
  temp: number = 0;
  points: number = 0;
  wrong: number = 0;
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.temp = Math.floor(Math.random() * (max - min)) + min;

    return this.temp;
  }

  onButtonClick(template) {}
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }

  checkAnswer(number, correct_answer, template) {
    if (number == correct_answer) {
      this.points++;
      if (this.points == 1) {
        this.openModal(template);
        this.idb.addScores(this.idCategory, true);
      }
    } else {
      this.wrong++;
      this.pointsService.setPoints(this.wrong)
      if (this.wrong == 3) {
        this.openModal(template);
      }
      
    }

    this.getRandomInt(1, 3);
    this.numberFromInput=null;
  }
}
