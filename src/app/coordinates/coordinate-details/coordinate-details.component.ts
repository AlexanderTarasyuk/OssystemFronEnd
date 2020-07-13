import { Coordinate } from '../coordinate';
import { Component, OnInit, Input } from '@angular/core';
import { CoordinateService } from '../coordinate.service';
import { CoordinateListComponent } from '../coordinate-list/coordinate-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './coordinate-details.component.html',
  styleUrls: ['./coordinate-details.component.css']
})
export class CoordinateDetailsComponent implements OnInit {

  id: number;
  figure: Coordinate;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CoordinateService) { }

  ngOnInit() {
    this.figure = new Coordinate();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.figure = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['figures/list']);
  }
}
