import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinateService } from '../coordinate.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-coordinate.component.html',
  styleUrls: ['./update-coordinate.component.css']
})
export class UpdateCoordinateComponent implements OnInit {

  id: number;
  employee: Coordinate;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CoordinateService) { }

  ngOnInit() {
    this.employee = new Coordinate();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getCoordinate(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateCoordinate(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Coordinate();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/figures/list']);
  }
}
