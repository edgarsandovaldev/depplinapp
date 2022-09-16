import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { DirectoriosComponent } from './leftmenu/directorios/directorios.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasComponent},
  { path:'herramientas', component: HerramientasComponent},
  { path:'directorios', component: DirectoriosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
