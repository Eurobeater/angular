import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './menu-navegacion/secciones/buscador/buscador.component';
import { CarritoComponent } from './menu-navegacion/secciones/carrito/carrito.component';
import { Error404Component } from './menu-navegacion/secciones/error404/error404.component';
import { InicioComponent } from './menu-navegacion/secciones/inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch: 'full'},
  {path:'inicio', component:InicioComponent},
  {path:'buscador', component:BuscadorComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
