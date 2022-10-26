import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoligrafosparkerComponent } from './boligrafosparker/boligrafosparker.component';
import { BoligrafosdepplinComponent } from './boligrafosdepplin/boligrafosdepplin.component';
import { AgendasComponent } from './agendas/agendas.component';
import { TodosComponent } from './todos/todos.component';
import { ProductosyserviciosRoutingModule } from './productosyservicios-routing.module';


@NgModule({
  declarations: [
    BoligrafosparkerComponent,
    BoligrafosdepplinComponent,
    AgendasComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    ProductosyserviciosRoutingModule
  ]
})
export class ProductosyserviciosModule { }
