import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { MenusComponent } from './menus/menus.component';


@NgModule({
  declarations: [
    CatalogosComponent,
    MenusComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule
  ]
})
export class AppsModule { }
