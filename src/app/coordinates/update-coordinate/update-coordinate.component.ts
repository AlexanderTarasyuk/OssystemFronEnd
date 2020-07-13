import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinateService } from '../coordinate.service';
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-update-coordinate',
  templateUrl: './update-coordinate.component.html',
  styleUrls: ['./update-coordinate.component.css']
})
export class UpdateCoordinateComponent implements OnInit {

  id: number;
  coordinate: Coordinate;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CoordinateService) { }

  ngOnInit() {
    this.coordinate = new Coordinate();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getCoordinate(this.id)
      .subscribe(data => {
        console.log(data)
        this.coordinate = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateCoordinate(this.id, this.coordinate)
      .subscribe(data => console.log(data), error => console.log(error));
    this.coordinate = new Coordinate();
    delay(1000);
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/coordinates/list']);
  }
}
