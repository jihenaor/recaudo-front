import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoRequest } from 'src/app/core/pagorequest';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component implements OnInit {
  pagorequest: PagoRequest;
  loading: boolean = false;
  status_date: string;
  status_status: string;
  status_message: string;
  payment_amount_currency: string;
  payment_amount_total: string;

  constructor(private route: ActivatedRoute,
    private service: ServicesService,) {

  }

  ngOnInit(): void {

    const codsuscrip = this.route.snapshot.paramMap.get('codsuscrip') as string;
    const idfactura = this.route.snapshot.paramMap.get('idfactura') as string;

    this.pagorequest = new PagoRequest(codsuscrip, idfactura);

    this.loading = true;
    this.pagarFactura();
  }

  pagarFactura() {
    this.loading = true;

    this.service.postPagarFactura(this.pagorequest).subscribe(resp => {
      this.loading = false;
      this.status_date = resp.status.date;
      switch (resp.status.status) {
        case 'APPROVED':
          this.status_status = 'APROBADO';
          this.payment_amount_currency = resp.request.payment.amount.currency;
          this.payment_amount_total = resp.request.payment.amount.total;
          break;
        default:
          this.status_status = resp.status.status;
      }
      
      this.status_message = resp.status.message;
    },
    error => {
      this.loading = false;
      alert('Se ha presentado un error')
    });
  }

}
