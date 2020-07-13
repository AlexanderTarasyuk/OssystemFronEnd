import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateListComponent } from './coordinate-list.component';

describe('EmployeeListComponent', () => {
  let component: CoordinateListComponent;
  let fixture: ComponentFixture<CoordinateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
