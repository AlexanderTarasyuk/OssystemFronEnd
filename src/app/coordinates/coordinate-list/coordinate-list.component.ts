import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { CoordinateService } from "../coordinate.service";
import { Coordinate } from "../coordinate";
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinate-list',
  templateUrl: './coordinate-list.component.html',
  styleUrls: ['./coordinate-list.component.css']
})
export class CoordinateListComponent implements OnInit {

  coordinates: Observable<Coordinate[]>;

  constructor(private coordinateService: CoordinateService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.coordinates = this.coordinateService.getCoordinateList();
  }

  deleteCoordinate(id: number) {
    this.coordinateService.deleteCoordinate(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  coordinateDetail(id: number){
    this.router.navigate(['coordinates/details', id]);
  }
  updateCoordinate (id:number){
  this.router.navigate(['coordinates/update', id]);
  }
}
