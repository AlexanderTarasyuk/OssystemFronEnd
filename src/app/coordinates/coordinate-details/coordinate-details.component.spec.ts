import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateDetailsComponent } from './coordinate-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: CoordinateDetailsComponent;
  let fixture: ComponentFixture<CoordinateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
