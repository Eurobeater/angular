import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { PieComponent } from './pie/pie.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloCarritoComponent } from './menu-navegacion/secciones/carrito/articulo-carrito/articulo-carrito.component';
import { BuscadorComponent } from './menu-navegacion/secciones/buscador/buscador.component';
import { Error404Component } from './menu-navegacion/secciones/error404/error404.component';
import { InicioComponent } from './menu-navegacion/secciones/inicio/inicio.component';
import { CarritoComponent } from './menu-navegacion/secciones/carrito/carrito.component';
import { CategoriaPipe } from './categoria.pipe';
import { FabricantePipe } from './fabricante.pipe';
import { NombrePipe } from './nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuNavegacionComponent,
    PieComponent,
    InicioComponent,
    BuscadorComponent,
    CarritoComponent,
    ArticuloCarritoComponent,
    ArticuloComponent,
    Error404Component,
    CategoriaPipe,
    FabricantePipe,
    NombrePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EncabezadoComponent, MenuNavegacionComponent, PieComponent, ArticuloComponent, ArticuloCarritoComponent, BuscadorComponent, Error404Component, InicioComponent, CarritoComponent],
  bootstrap: [AppComponent, EncabezadoComponent, MenuNavegacionComponent, PieComponent, ArticuloComponent, ArticuloCarritoComponent, BuscadorComponent, Error404Component, InicioComponent, CarritoComponent]
})
export class AppModule { }
