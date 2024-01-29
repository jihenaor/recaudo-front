import { Component, Input, inject } from '@angular/core';
import { ClientEvertecResponse } from 'src/app/core/ClientEvertecResponse';
import { Factura } from 'src/app/core/factura';
import { SessionFacturasService } from 'src/app/services/sesionFacturas.service';
import { FacturaRequest } from '../../../core/FacturaRequest';

@Component({
  selector: 'app-boton-continuar-pago',
  standalone: true,
  imports: [],
  template: `
    <button mat-button class="btn-large waves-effect waves-light servi" (click)="iniciarSessionEvertec()">Confirmar</button>
            `
})
export class BotonContinuarPagoComponent {
  public consultarFacturasService = inject(SessionFacturasService);
  @Input() factura: Factura;

  public iniciarSessionEvertec() {
    const facturaRequest: FacturaRequest = {
      codsuscrip: this.factura.cuenta,
      tipoFactura: this.factura.tipofact,
      numerofactura: this.factura.idfactura,
      valor: this.factura.totalfactura
    }

    this.consultarFacturasService.postSession(facturaRequest).subscribe({
      next: (resp: ClientEvertecResponse) => {
        if (resp.requestId === 0) {
          alert('Existe un intento de pago en curso, es probable que ya haya iniciado una transacción u otra persona la haya iniciado en otro lugar. Intente de nuevo en 10 minutos');
          return;
        } else {
          window.location.href = resp.processUrl;
        }
      },
      error: () => {
        alert('Se ha presentado un error, por favor intente de nuevo la operacion mas tarde');
      }
    });
  }
}
