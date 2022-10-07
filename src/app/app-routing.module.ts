import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectoriosComponent } from './leftmenu/directorios/directorios.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'directorios', component: DirectoriosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
