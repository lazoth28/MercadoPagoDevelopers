// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { v4 as uuidv4 } from 'uuid';

// import { ApiServiceService } from '../../servicios/api-service.service';

// @Component({
//   selector: 'app-pagar-producto',
//   templateUrl: './pagar-producto.component.html',
//   styleUrls: ['./pagar-producto.component.css'] // Corrige la propiedad styleUrls
// })
// export class PagarProductoComponent implements OnInit {
//   producto: any;
//   productos = [
//     { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 100 },
//     { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 200 },
//     { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 300 },
//     { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', precio: 400 },
//     { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', precio: 500 }
//   ];

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private mercadopagoService: ApiServiceService
//   ) {}

//   ngOnInit(): void {
//     const productId = Number(this.route.snapshot.paramMap.get('id'));
//     this.producto = this.productos.find(p => p.id === productId);
//   }

//   pagar(): void {
//     const cardNumber = "5474925432670366";
//     const expirationMonth = 11;
//     const expirationYear = 2025;
//     const securityCode = "123";
//     const cardholderName = "APRO";

//     this.mercadopagoService.createAndSaveCardToken(cardNumber, expirationMonth, expirationYear, securityCode, cardholderName).subscribe(
//       response => {
//         console.log('Token de tarjeta creado y guardado:', response);
//         const paymentData = {
//           transaction_amount: this.producto.precio,
//           token: response.id,
//           description: this.producto.nombre,
//           // Agrega los datos necesarios del comprador y otros campos según tu API
//         };
//         const idempotencyKey = uuidv4();
//         this.mercadopagoService.createPayment(paymentData, idempotencyKey).subscribe(
//           paymentResponse => {
//             console.log('Pago realizado:', paymentResponse);
//             this.router.navigate(['/compra-realizada'], { state: { paymentDetails: paymentResponse } });
//           },
//           error => {
//             console.error('Error al realizar el pago:', error);
//           }
//         );
//       },
//       error => {
//         console.error('Error al crear y guardar el token de tarjeta:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ApiServiceService } from '../../servicios/api-service.service';

@Component({
  selector: 'app-pagar-producto',
  templateUrl: './pagar-producto.component.html',
  styleUrls: ['./pagar-producto.component.css']
})
export class PagarProductoComponent implements OnInit {
  producto: any;
  productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 300 },
    { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', precio: 400 },
    { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', precio: 500 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mercadopagoService: ApiServiceService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productos.find(p => p.id === productId);
  }

  pagar(): void {
    const cardNumber = "5474925432670366";
    const expirationMonth = 11;
    const expirationYear = 2025;
    const securityCode = "123";
    const cardholderName = "APRO";

    this.mercadopagoService.createAndSaveCardToken(cardNumber, expirationMonth, expirationYear, securityCode, cardholderName).subscribe(
      response => {
        console.log('Token de tarjeta creado y guardado:', response);
        const paymentData = {
          transaction_amount: this.producto.precio,
          token: response.id,
          description: this.producto.nombre,
          // Agrega los datos necesarios del comprador y otros campos según tu API
        };
        const idempotencyKey = uuidv4();
        this.mercadopagoService.createPayment(paymentData, idempotencyKey).subscribe(
          paymentResponse => {
            console.log('Pago realizado:', paymentResponse);
            this.router.navigate(['/compra-realizada'], { state: { paymentDetails: paymentResponse } });
          },
          error => {
            console.error('Error al realizar el pago:', error);
            console.log('Contenido de la respuesta del error:', error.error);
          }
        );
      },
      error => {
        console.error('Error al crear y guardar el token de tarjeta:', error);
        console.log('Contenido de la respuesta del error:', error.error);
      }
    );
  }
}

