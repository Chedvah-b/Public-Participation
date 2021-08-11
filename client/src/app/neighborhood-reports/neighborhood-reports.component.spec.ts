import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodReportsComponent } from './neighborhood-reports.component';

describe('NeighborhoodReportsComponent', () => {
  let component: NeighborhoodReportsComponent;
  let fixture: ComponentFixture<NeighborhoodReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeighborhoodReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborhoodReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
