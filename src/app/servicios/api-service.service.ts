// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
// export class ApiServiceService {
//   private apiUrl = '/api/v1';
//   private headers = new HttpHeaders({
//     'Authorization': 'Bearer TEST-3579996812147630-060901-e596f809859e178a4da218bf4a1b5cd7-660962330', // Reemplaza YOUR_ACCESS_TOKEN con tu token de acceso
//     'Content-Type': 'application/json'
//   });
//   private cardToken: string | null = null;
//   constructor(private http: HttpClient) {}

//   // Método para crear un token de tarjeta
//   createAndSaveCardToken(cardNumber: string, expirationMonth: number, expirationYear: number, securityCode: string, cardholderName: string): Observable<any> {
//     const cardData = {
//       card_number: cardNumber,
//       expiration_month: expirationMonth,
//       expiration_year: expirationYear,
//       security_code: securityCode,
//       cardholder: {
//         name: cardholderName
//       }
//     };

//     return this.http.post(`${this.apiUrl}/card_tokens`, cardData, { headers: this.headers })
//       .pipe(
//         tap((response: any) => {
//           this.cardToken = response.id;
//         })
//       );
//   }
//   // Método para obtener el token de tarjeta guardado
//   getCardToken(): string | null {
//     return this.cardToken;
//   }

//   // Método para crear un pago
//   createPayment(paymentData: any, idempotencyKey: string): Observable<any> {
//     const paymentHeaders = this.headers.set('X-Idempotency-Key', idempotencyKey);
//     return this.http.post(`${this.apiUrl}/payments`, paymentData, { headers: paymentHeaders });
//   }

//   // Método para obtener detalles de un pago por ID
//   getPaymentById(paymentId: string): Observable<any> {
//     return this.http.get(`${this.apiUrl}/payments/${paymentId}`, { headers: this.headers });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = '/api/v1';
  private headers = new HttpHeaders({
    'Authorization': 'Bearer TEST-3579996812147630-060901-e596f809859e178a4da218bf4a1b5cd7-660962330',
    'Content-Type': 'application/json'
  });
  private cardToken: string | null = null;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nResponse: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  createAndSaveCardToken(cardNumber: string, expirationMonth: number, expirationYear: number, securityCode: string, cardholderName: string): Observable<any> {
    const cardData = {
      card_number: cardNumber,
      expiration_month: expirationMonth,
      expiration_year: expirationYear,
      security_code: securityCode,
      cardholder: {
        name: cardholderName
      }
    };

    return this.http.post(`${this.apiUrl}/card_tokens`, cardData, { headers: this.headers })
      .pipe(
        tap((response: any) => {
          console.log('Respuesta del servidor:', response);
          this.cardToken = response.id;
        }),
        catchError(this.handleError)
      );
  }

  getCardToken(): string | null {
    return this.cardToken;
  }

  createPayment(paymentData: any, idempotencyKey: string): Observable<any> {
    const paymentHeaders = this.headers.set('X-Idempotency-Key', idempotencyKey);
    return this.http.post(`${this.apiUrl}/payments`, paymentData, { headers: paymentHeaders })
      .pipe(
        tap(response => console.log('Respuesta del servidor al crear pago:', response)),
        catchError(this.handleError)
      );
  }

  getPaymentById(paymentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/payments/${paymentId}`, { headers: this.headers })
      .pipe(
        tap(response => console.log('Respuesta del servidor al obtener pago:', response)),
        catchError(this.handleError)
      );
  }
}
