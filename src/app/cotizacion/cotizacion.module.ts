import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizacionRoutingModule } from './cotizacion-routing.module';
import { CotizaarComponent } from './cotizaar/cotizaar.component';


@NgModule({
  declarations: [
    CotizaarComponent
  ],
  imports: [
    CommonModule,
    CotizacionRoutingModule
  ]
})
export class CotizacionModule { }
