import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { Router } from '@angular/router';
import { CoordinateService } from '../coordinate.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-coordinate.component.html',
  styleUrls: ['./create-coordinate.component.css']
})
export class CreateCoordinateComponent implements OnInit {

  employee: Coordinate = new Coordinate();
  submitted = false;

  constructor(private employeeService: CoordinateService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Coordinate();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Coordinate();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/figures']);
  }
}
