import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';







const routes: Routes = [

  {
    path:'inicio', component: InicioComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./productosyservicios/productosyservicios.module').then( m => m.ProductosyserviciosModule )
  },
  {
    path: 'agendas',
    loadChildren: () => import('./productosyservicios/productosyservicios.module').then( m => m.ProductosyserviciosModule )
  },
  {
    path: 'boligrafosparker',
    loadChildren: () => import('./productosyservicios/productosyservicios.module').then( m => m.ProductosyserviciosModule )
  },
  {
    path: 'boligrafosdepplin',
    loadChildren: () => import('./productosyservicios/productosyservicios.module').then( m => m.ProductosyserviciosModule )
  },
  {
    path: '**',
    redirectTo: 'inicio'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
