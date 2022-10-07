import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { OtherproductsComponent } from './otherproducts/otherproducts.component';
import { TodascategoriasComponent } from './todascategorias/todascategorias.component';
import { PromobannersComponent } from './promobanners/promobanners.component';
import { TrabajosrealizadosComponent } from './trabajosrealizados/trabajosrealizados.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    ProductComponent,
    OtherproductsComponent,
    TodascategoriasComponent,
    PromobannersComponent,
    TrabajosrealizadosComponent,
    BuscadorComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    OtherproductsComponent,
  ]
})
export class UikitModule { }
