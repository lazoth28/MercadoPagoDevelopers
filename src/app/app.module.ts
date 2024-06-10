import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeleccionarProductoComponent } from './Components/seleccionar-producto/seleccionar-producto.component';
import { PagarProductoComponent } from './Components/pagar-producto/pagar-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { CompraRealizadaComponent } from './Components/compra-realizada/compra-realizada.component';


@NgModule({
  declarations: [
    AppComponent,
    SeleccionarProductoComponent,
    PagarProductoComponent,
    CompraRealizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
