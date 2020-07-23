import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FightComponent } from './view/fight/fight.component';


const routes: Routes = [
  {
    path: '',
    component: FightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
