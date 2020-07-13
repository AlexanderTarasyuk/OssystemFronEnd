import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureDetailsComponent } from './figure-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: FigureDetailsComponent;
  let fixture: ComponentFixture<FigureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
