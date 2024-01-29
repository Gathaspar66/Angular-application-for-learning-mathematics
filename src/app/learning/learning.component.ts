import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IdbService } from '../services/idb.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  modalRef: BsModalRef;
  category:string;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
setCategory(category:string, template: TemplateRef<any>){
  this.category=category;
  this.modalRef = this.modalService.show(template);
 
}
}
