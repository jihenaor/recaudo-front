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
  respuesta: any;

  constructor(private route: ActivatedRoute,
    private service: ServicesService,) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.pagorequest = new PagoRequest(id);

    this.loading = true;
    this.pagarFactura();
  }

  pagarFactura() {
    this.loading = true;

    this.service.postPagarFactura(this.pagorequest).subscribe(resp => {
      this.loading = false;
      this.respuesta = resp;
    },
    error => {
      this.loading = false;
      alert('Se ha presentado un error')
    });
  }

}
