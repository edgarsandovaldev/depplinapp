import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsRoutingModule } from './webs-routing.module';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';


@NgModule({
  declarations: [
    DesarrolloComponent
  ],
  imports: [
    CommonModule,
    WebsRoutingModule
  ]
})
export class WebsModule { }
