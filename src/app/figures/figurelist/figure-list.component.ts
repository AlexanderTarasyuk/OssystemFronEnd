import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { FigureService } from "../figure.service";
import { Figure } from "../figure";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './figure-list.component.html',
  styleUrls: ['./figure-list.component.css']
})
export class FigureListComponent implements OnInit {

  figures: Observable<Figure[]>;

  constructor(private employeeService: FigureService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.figures = this.employeeService.getFiguresList();
  }

  deleteFigure(id: number) {
    this.employeeService.deleteFigure(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  figureDetails(id: number){
    this.router.navigate(['figures/details', id]);
  }
  updateFigure (id:number){
  this.router.navigate(['figures/update', id]);
  }
}
