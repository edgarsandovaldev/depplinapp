import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpresionesComponent } from './impresiones/impresiones.component';
import { MarquillasyetiquetasComponent } from './marquillasyetiquetas/marquillasyetiquetas.component';
import { LapicerosComponent } from './lapiceros/lapiceros.component';
import { BolsasComponent } from './bolsas/bolsas.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { CajasComponent } from './cajas/cajas.component';
import { ParafinadosComponent } from './parafinados/parafinados.component';
import { DigitalesComponent } from './digitales/digitales.component';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  declarations: [
    ImpresionesComponent,
    MarquillasyetiquetasComponent,
    LapicerosComponent,
    BolsasComponent,
    PromocionesComponent,
    CajasComponent,
    ParafinadosComponent,
    DigitalesComponent,
    TodosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepplinModule { }
