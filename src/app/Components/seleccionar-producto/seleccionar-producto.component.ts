import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seleccionar-producto',
  templateUrl: './seleccionar-producto.component.html',
  styleUrl: './seleccionar-producto.component.css'
})
export class SeleccionarProductoComponent {
  productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 300 },
    { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', precio: 400 },
    { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', precio: 500 }
  ];
  constructor(private router: Router) {}

  seleccionarProducto(productId: number): void {
    this.router.navigate(['/pagar-producto', productId]);
  }
}
