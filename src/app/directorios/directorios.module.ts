import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoriosRoutingModule } from './directorios-routing.module';
import { LaminoristaComponent } from './laminorista/laminorista.component';
import { LaterminaldelnorteComponent } from './laterminaldelnorte/laterminaldelnorte.component';
import { LaterminaldelsurComponent } from './laterminaldelsur/laterminaldelsur.component';
import { AeropuertomedellinComponent } from './aeropuertomedellin/aeropuertomedellin.component';
import { AeropuertorionegroComponent } from './aeropuertorionegro/aeropuertorionegro.component';
import { CcshangaiComponent } from './centroscomerciales/ccshangai/ccshangai.component';
import { CcmiamiComponent } from './centroscomerciales/ccmiami/ccmiami.component';
import { CcparquefabricatoComponent } from './centroscomerciales/ccparquefabricato/ccparquefabricato.component';
import { CcvivaenvigadoComponent } from './centroscomerciales/ccvivaenvigado/ccvivaenvigado.component';
import { CcmayorcaComponent } from './centroscomerciales/ccmayorca/ccmayorca.component';
import { PuertadelnorteComponent } from './centroscomerciales/puertadelnorte/puertadelnorte.component';
import { HotelesmedellinComponent } from './centroscomerciales/hotelesmedellin/hotelesmedellin.component';
import { HotelesitaguiComponent } from './centroscomerciales/hotelesitagui/hotelesitagui.component';
import { HotelesbelloComponent } from './centroscomerciales/hotelesbello/hotelesbello.component';
import { HotelesenvigadoComponent } from './centroscomerciales/hotelesenvigado/hotelesenvigado.component';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    LaminoristaComponent,
    LaterminaldelnorteComponent,
    LaterminaldelsurComponent,
    AeropuertomedellinComponent,
    AeropuertorionegroComponent,
    CcshangaiComponent,
    CcmiamiComponent,
    CcparquefabricatoComponent,
    CcvivaenvigadoComponent,
    CcmayorcaComponent,
    PuertadelnorteComponent,
    HotelesmedellinComponent,
    HotelesitaguiComponent,
    HotelesbelloComponent,
    HotelesenvigadoComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    DirectoriosRoutingModule
  ]
})
export class DirectoriosModule { }
