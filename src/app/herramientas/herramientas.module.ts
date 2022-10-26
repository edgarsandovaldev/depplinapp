import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasRoutingModule } from './herramientas-routing.module';
import { TodasComponent } from './todas/todas.component';
import { ConvertidorpdfComponent } from './convertidorpdf/convertidorpdf.component';
import { ColoresComponent } from './colores/colores.component';
import { FuentesComponent } from './fuentes/fuentes.component';
import { LinkwhatsappComponent } from './linkwhatsapp/linkwhatsapp.component';
import { OrganizadorImpresionesComponent } from './organizador-impresiones/organizador-impresiones.component';
import { PapabrasclavesComponent } from './papabrasclaves/papabrasclaves.component';
import { PalabrasclavesComponent } from './palabrasclaves/palabrasclaves.component';
import { CanvaComponent } from './canva/canva.component';
import { ModelosComponent } from './modelos/modelos.component';


@NgModule({
  declarations: [
    TodasComponent,
    ConvertidorpdfComponent,
    ColoresComponent,
    FuentesComponent,
    LinkwhatsappComponent,
    OrganizadorImpresionesComponent,
    PapabrasclavesComponent,
    PalabrasclavesComponent,
    CanvaComponent,
    ModelosComponent
  ],
  imports: [
    CommonModule,
    HerramientasRoutingModule
  ]
})
export class HerramientasModule { }
