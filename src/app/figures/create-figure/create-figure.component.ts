import { Component, OnInit } from '@angular/core';
import { Figure } from '../figure';
import { Router } from '@angular/router';
import { FigureService } from '../figure.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-figure.component.html',
  styleUrls: ['./create-figure.component.css']
})
export class CreateFigureComponent implements OnInit {

  figure: Figure = new Figure();
  submitted = false;

  constructor(private employeeService: FigureService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.figure = new Figure();
  }

  save() {
    this.employeeService.createFigure(this.figure)
      .subscribe(data => console.log(data), error => console.log(error));
    this.figure = new Figure();
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
