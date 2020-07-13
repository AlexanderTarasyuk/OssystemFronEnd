import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoordinateComponent } from './create-coordinate.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateCoordinateComponent;
  let fixture: ComponentFixture<CreateCoordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
