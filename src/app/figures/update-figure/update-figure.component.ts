import { Component, OnInit } from '@angular/core';
import { Figure } from '../figure';
import { ActivatedRoute, Router } from '@angular/router';
import { FigureService } from '../figure.service';
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-update-coordinate',
  templateUrl: './update-figure.component.html',
  styleUrls: ['./update-figure.component.css']
})
export class UpdateFigureComponent implements OnInit {

  id: number;
  figure: Figure;

  constructor(private route: ActivatedRoute,private router: Router,
    private figureService: FigureService) { }

  ngOnInit() {
    this.figure = new Figure();

    this.id = this.route.snapshot.params['id'];

    this.figureService.getFigure(this.id)
      .subscribe(data => {
        console.log(data)
        this.figure = data;
      }, error => console.log(error));
  }

  updateFigure() {
    this.figureService.updateFigure(this.id, this.figure)
      .subscribe(data => console.log(data), error => console.log(error));
    this.figure = new Figure();
    delay(5000);
    this.gotoList();
  }

  onSubmit() {
    this.updateFigure();
    delay(5000);
  }

  gotoList() {
    delay(5000);
    this.router.navigate(['/figures/list']);
  }
}
