import { Component, OnInit } from '@angular/core';
import { Figure } from '../figure';
import { ActivatedRoute, Router } from '@angular/router';
import { FigureService } from '../figure.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-figure.component.html',
  styleUrls: ['./update-figure.component.css']
})
export class UpdateFigureComponent implements OnInit {

  id: number;
  employee: Figure;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: FigureService) { }

  ngOnInit() {
    this.employee = new Figure();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getFigure(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateFigure(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Figure();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/figures/list']);
  }
}
