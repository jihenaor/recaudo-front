import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ConsultarFacturasService } from 'src/app/services/consultarFacturas.service';

@Component({
  selector: 'app-payment-instructions',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="row center">
      <div class="textopago">
        <h5 class="center ">REALICE EL PAGO DE SU FACTURA AQUÍ DE FORMA ÁGIL Y SEGURA A TRAVÉS DE<strong></strong></h5>

        <div class="centerBlock">
          <img class="img-responsive" src="assets/images/pagopse.png">
        </div>
      </div>
    </div>

    @if (consultarFacturasService.facturas() && consultarFacturasService.facturas().length == 0) {
      <div class="row center">
        <!--
        <img src="assets/images/paso1.png" class="iresp" />
  -->
        <p class="servi1">Digite en la casilla el <strong>número de cuenta de usuario</strong> que se encuentra en la
          sección del Usuario de SERVICIUDAD E.S.P.</p>
      </div>
    }
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentInstructionsComponent {
  public consultarFacturasService = inject(ConsultarFacturasService);

}
