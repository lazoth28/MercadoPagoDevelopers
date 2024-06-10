import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-compra-realizada',
  templateUrl: './compra-realizada.component.html',
  styleUrl: './compra-realizada.component.css'
})
export class CompraRealizadaComponent implements OnInit {
  paymentDetails: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.paymentDetails = history.state.paymentDetails;
  }
}
