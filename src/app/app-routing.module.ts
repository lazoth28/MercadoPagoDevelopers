import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarProductoComponent } from './Components/seleccionar-producto/seleccionar-producto.component';
import { PagarProductoComponent } from './Components/pagar-producto/pagar-producto.component';
import { CompraRealizadaComponent } from './Components/compra-realizada/compra-realizada.component';

const routes: Routes = [
  { path: '', redirectTo: '/seleccionar-producto', pathMatch: 'full' },
  { path: 'seleccionar-producto', component: SeleccionarProductoComponent },
  { path: 'pagar-producto/:id', component: PagarProductoComponent },
  { path: 'compra-realizada', component: CompraRealizadaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
