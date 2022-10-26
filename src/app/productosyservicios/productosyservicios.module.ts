import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoligrafosparkerComponent } from './boligrafosparker/boligrafosparker.component';
import { BoligrafosdepplinComponent } from './boligrafosdepplin/boligrafosdepplin.component';
import { AgendasComponent } from './agendas/agendas.component';
import { TodosComponent } from './todos/todos.component';
import { ProductosyserviciosRoutingModule } from './productosyservicios-routing.module';
import { LogosComponent } from './logos/logos.component';
import { BrochurepdfComponent } from './brochurepdf/brochurepdf.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { VolantesComponent } from './volantes/volantes.component';
import { CarpetasComponent } from './carpetas/carpetas.component';
import { RecetariosComponent } from './recetarios/recetarios.component';
import { TalonariosComponent } from './talonarios/talonarios.component';
import { BolsasimpresasComponent } from './bolsasimpresas/bolsasimpresas.component';
import { BolsasdepapelComponent } from './bolsasdepapel/bolsasdepapel.component';
import { BolsasdeplasticoComponent } from './bolsasdeplastico/bolsasdeplastico.component';
import { BolsasecologicasComponent } from './bolsasecologicas/bolsasecologicas.component';
import { BolsasdeboutiqueComponent } from './bolsasdeboutique/bolsasdeboutique.component';
import { CajasComponent } from './cajas/cajas.component';
import { MarquillasComponent } from './marquillas/marquillas.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';


@NgModule({
  declarations: [
    BoligrafosparkerComponent,
    BoligrafosdepplinComponent,
    AgendasComponent,
    TodosComponent,
    LogosComponent,
    BrochurepdfComponent,
    TarjetasComponent,
    VolantesComponent,
    CarpetasComponent,
    RecetariosComponent,
    TalonariosComponent,
    BolsasimpresasComponent,
    BolsasdepapelComponent,
    BolsasdeplasticoComponent,
    BolsasecologicasComponent,
    BolsasdeboutiqueComponent,
    CajasComponent,
    MarquillasComponent,
    EtiquetasComponent
  ],
  imports: [
    CommonModule,
    ProductosyserviciosRoutingModule
  ]
})
export class ProductosyserviciosModule { }
