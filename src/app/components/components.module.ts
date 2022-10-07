import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { BannersComponent } from './banners/banners.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { ModosdepagoComponent } from './modosdepago/modosdepago.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    BannersComponent,
    CategoriasComponent,
    HerramientasComponent,
    ModosdepagoComponent,


  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HerramientasComponent,

  ]
})
export class ComponentsModule { }
