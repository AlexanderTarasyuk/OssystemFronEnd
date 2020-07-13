import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { CoordinateService } from "../coordinate.service";
import { Coordinate } from "../coordinate";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './coordinate-list.component.html',
  styleUrls: ['./coordinate-list.component.css']
})
export class CoordinateListComponent implements OnInit {

  employees: Observable<Coordinate[]>;

  constructor(private employeeService: CoordinateService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['figures/details', id]);
  }
  updateEmloyeee (id:number){
  this.router.navigate(['figures/update', id]);
  }
}
