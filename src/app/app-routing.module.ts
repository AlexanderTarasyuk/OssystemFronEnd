import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FigureListComponent } from './figures/figurelist/figure-list.component';
import { CreateFigureComponent } from './figures/create-figure/create-figure.component';
import { UpdateFigureComponent } from './figures/update-figure/update-figure.component';
import { FigureDetailsComponent } from './figures/figure-details/figure-details.component';


const routes: Routes = [

  { path: '', redirectTo: 'figures/list', pathMatch: 'full' },
  { path: 'figures/list', component: FigureListComponent },
  { path: 'figures/add', component: CreateFigureComponent },
  { path: 'figures/update/:id', component: UpdateFigureComponent },
  { path: 'figures/details/:id', component: FigureDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
