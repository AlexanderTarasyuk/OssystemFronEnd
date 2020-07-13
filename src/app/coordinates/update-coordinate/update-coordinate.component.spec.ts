import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoordinateComponent } from './update-coordinate.component';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateCoordinateComponent;
  let fixture: ComponentFixture<UpdateCoordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCoordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
