import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  constructor() {}
  points: number;

  setPoints(points) {
    this.points = points;
    
    
  }
  getPoints() {
    
    return this.points;
  }
}
