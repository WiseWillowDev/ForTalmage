import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { GamerListComponent } from './gamer-list/gamer-list.component';
import { PointSystemComponent } from './point-system/point-system.component';
import { ResultsComponent } from './results/results.component';
import { TournmentTimeComponent } from './tournment-time/tournment-time.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'gamers', component: GamerListComponent },
  { path: 'points', component: PointSystemComponent },
  { path: 'start', component: TournmentTimeComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
