import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendasComponent } from './agendas/agendas.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path:'todos', component: AgendasComponent },
      { path:'agendas', component: AgendasComponent },
      { path:'boligrafosparker', component: AgendasComponent },
      { path:'boligrafosdepplin', component: AgendasComponent },
      { path:'**', component: TodosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosyserviciosRoutingModule { }
