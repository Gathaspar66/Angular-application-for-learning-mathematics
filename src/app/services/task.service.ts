import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

idCategory:string;


setidCategory(idCategory){

  this.idCategory=idCategory;
}
getidCategory(){

return this.idCategory
}

}
