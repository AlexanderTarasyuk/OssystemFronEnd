import { Coordinate } from '../coordinate';
import { Component, OnInit, Input } from '@angular/core';
import { CoordinateService } from '../coordinate.service';
import { CoordinateListComponent } from '../coordinate-list/coordinate-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-figure-details',
  templateUrl: './coordinate-details.component.html',
  styleUrls: ['./coordinate-details.component.css']
})
export class CoordinateDetailsComponent implements OnInit {

  id: number;
  coordinate: Coordinate;

  constructor(private route: ActivatedRoute,private router: Router,
    private coordinateService: CoordinateService) { }

  ngOnInit() {
    this.coordinate = new Coordinate();

    this.id = this.route.snapshot.params['id'];

    this.coordinateService.getCoordinate(this.id)
      .subscribe(data => {
        console.log(data)
        this.coordinate = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['coordinates/list']);
  }
}
