import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryClassComponent } from './category-class.component';

describe('CategoryClassComponent', () => {
  let component: CategoryClassComponent;
  let fixture: ComponentFixture<CategoryClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
