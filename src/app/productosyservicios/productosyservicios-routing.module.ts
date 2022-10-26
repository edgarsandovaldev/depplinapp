import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendasComponent } from './agendas/agendas.component';
import { TodosComponent } from './todos/todos.component';
import { BoligrafosparkerComponent } from './boligrafosparker/boligrafosparker.component';
import { BoligrafosdepplinComponent } from './boligrafosdepplin/boligrafosdepplin.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path:'todos', component: TodosComponent },
      { path:'agendas', component: AgendasComponent },
      { path:'boligrafosparker', component: BoligrafosparkerComponent },
      { path:'boligrafosdepplin', component: BoligrafosdepplinComponent },
      { path:'**', component: TodosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosyserviciosRoutingModule { }
