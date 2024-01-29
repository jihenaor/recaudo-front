import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoRequest } from 'src/app/core/pagorequest';
import { PagarFacturaService } from 'src/app/services/PagarFactura.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html'
})
export class Paso3Component implements OnInit {
  pagorequest: PagoRequest;

  constructor(private route: ActivatedRoute,
    public service: PagarFacturaService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.pagorequest = new PagoRequest(id);
    this.pagarFactura();
  }

  pagarFactura() {
    this.service.postPagarFactura(this.pagorequest);
  }
}
