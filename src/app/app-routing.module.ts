import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { MusicComponent } from './music/music.component'

const routes: Routes = [
  {path: 'counter', component: CounterComponent, data: { title: "CounterComponent"} },
  {path: 'music', component: MusicComponent, data: { title: "MusicComponent"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
