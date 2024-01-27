import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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

    <div class="row center">
      <img src="assets/images/paso1.png" class="iresp" />

      <p class="servi1">Digite en la casilla el <strong>número de cuenta de usuario</strong> que se encuentra en la
        sección del Usuario de SERVICIUDAD E.S.P.</p>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentInstructionsComponent { }
