import { Component, inject } from '@angular/core';
import { ConsultarFacturasService } from '../../../services/consultarFacturas.service';
import { BotondescargarComponent } from '../botondescargar/botondescargar.component';
import { BotonContinuarPagoComponent } from '../boton-continuar-pago/boton-continuar-pago.component';

@Component({
  selector: 'app-facturas-con-saldo',
  standalone: true,
  imports: [
    BotondescargarComponent,
    BotonContinuarPagoComponent
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
        return 'Pago cuota inicial financiación';
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
}
