import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { Router } from '@angular/router';
import { CoordinateService } from '../coordinate.service';
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-create-coordinate',
  templateUrl: './create-coordinate.component.html',
  styleUrls: ['./create-coordinate.component.css']
})
export class CreateCoordinateComponent implements OnInit {

  coordinate: Coordinate = new Coordinate();
  submitted = false;

  constructor(private coordinateService: CoordinateService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.coordinate = new Coordinate();
  }

  save() {
    this.coordinateService.createCoordinate(this.coordinate)
      .subscribe(data => console.log(data), error => console.log(error));
    this.coordinate = new Coordinate();
    delay(1000);
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/coordinates/list']);
  }
}
