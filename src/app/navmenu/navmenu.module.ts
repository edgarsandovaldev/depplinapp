import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosyserviciosComponent } from './productosyservicios/productosyservicios.component';
import { AppsComponent } from './apps/apps.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { DirectoriosComponent } from './directorios/directorios.component';
import { GaleryworksComponent } from './galeryworks/galeryworks.component';
import { NuestrosclientesComponent } from './nuestrosclientes/nuestrosclientes.component';
import { ToolsComponent } from './tools/tools.component';
import { WebsComponent } from './webs/webs.component';



@NgModule({
  declarations: [
    ProductosyserviciosComponent,
    AppsComponent,
    CotizarComponent,
    DirectoriosComponent,
    GaleryworksComponent,
    NuestrosclientesComponent,
    ToolsComponent,
    WebsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductosyserviciosComponent,
    AppsComponent,
    CotizarComponent,
    DirectoriosComponent,
    GaleryworksComponent,
    NuestrosclientesComponent,
    ToolsComponent,
    WebsComponent
  ]
})
export class NavmenuModule { }
