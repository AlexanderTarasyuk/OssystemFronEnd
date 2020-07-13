import { Figure } from '../figure';
import { Component, OnInit, Input } from '@angular/core';
import { FigureService } from '../figure.service';
import { FigureListComponent } from '../figurelist/figure-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-figure-details',
  templateUrl: './figure-details.component.html',
  styleUrls: ['./figure-details.component.css']
})
export class FigureDetailsComponent implements OnInit {

  id: number;
  figure: Figure;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: FigureService) { }

  ngOnInit() {
    this.figure = new Figure();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getFigure(this.id)
      .subscribe(data => {
        console.log(data)
        this.figure = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['figures/list']);
  }
}
