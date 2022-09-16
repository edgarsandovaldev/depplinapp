import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BannersComponent } from './componentes/banners/banners.component';
import { IniciobannerComponent } from './pantallas/iniciobanner/iniciobanner.component';
import { ProductComponent } from './componentes/product/product.component';
import { OtherproductsComponent } from './componentes/otherproducts/otherproducts.component';
import { NuestrosclientesComponent } from './leftmenu/nuestrosclientes/nuestrosclientes.component';
import { GaleryworksComponent } from './leftmenu/galeryworks/galeryworks.component';
import { AppsComponent } from './leftmenu/apps/apps.component';
import { WebsComponent } from './leftmenu/webs/webs.component';
import { CotizarComponent } from './leftmenu/cotizar/cotizar.component';
import { ToolsComponent } from './leftmenu/tools/tools.component';
import { DirectoriosComponent } from './leftmenu/directorios/directorios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    HerramientasComponent,
    InicioComponent,
    BannersComponent,
    IniciobannerComponent,
    ProductComponent,
    OtherproductsComponent,
    NuestrosclientesComponent,
    GaleryworksComponent,
    AppsComponent,
    WebsComponent,
    CotizarComponent,
    ToolsComponent,
    DirectoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
