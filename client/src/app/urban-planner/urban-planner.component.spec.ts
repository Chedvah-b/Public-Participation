import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanPlannerComponent } from './urban-planner.component';

describe('UrbanPlannerComponent', () => {
  let component: UrbanPlannerComponent;
  let fixture: ComponentFixture<UrbanPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
