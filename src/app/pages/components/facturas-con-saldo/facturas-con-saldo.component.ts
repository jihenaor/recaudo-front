import { Component, inject } from '@angular/core';
import { ConsultarFacturasService } from '../../../services/consultarFacturas.service';
import { BotondescargarComponent } from '../botondescargar/botondescargar.component';

@Component({
  selector: 'app-facturas-con-saldo',
  standalone: true,
  imports: [
    BotondescargarComponent
  ],
  templateUrl: './facturas-con-saldo.component.html'
})
export class FacturasConSaldoComponent {
  public consultarFacturasService = inject(ConsultarFacturasService);

  getDescripciontipofactura(tipofactura: string) {
    const tipo = Number(tipofactura);

    switch (tipo) {
      case 0:
        return "PAGO TOTAL";
      case 1:
        return 'pago cuota inicial financiación';
      case 2:
        return 'Abono por reclamo';
      case 3:
          return "pago parcial";
      case 4:
        return 'Pago anticipado'
      case 8:
        return 'Cobro reorganizacion empresarial'
    }
    return '';
  }


/*
  continuar() {


    this.service.postSession({"codsuscrip": this.factura.cuenta}).subscribe(resp => {
      if (resp.requestId === 0) {
        alert('Existe un intento de pago en curso, es probable que ya haya iniciado una transacción u otra persona la haya iniciado en otro lugar.  Intente de nuevo en 10 minutos');
        this.loading = false;
        return;
      } else {
        this.loading = false;
        window.location.href = resp.processUrl;
      }

    },
    error => {
      this.loading = false;
      alert('Se ha presentado un error, por favor intente de nuevo la operacion mas tarde')
    });
  }
*/
}
