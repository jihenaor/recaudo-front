import { Component, Input, input } from '@angular/core';
import { Factura } from 'src/app/core/factura';

@Component({
  selector: 'app-botondescargar',
  standalone: true,
  imports: [],
  template: `<button mat-button
      class="btn-large waves-effect waves-light servi" (click)="descargarFactura()">Descargar Factura</button>
  `
})
export class BotondescargarComponent {
  @Input() factura: Factura

  descargarFactura() {
    window.open('https://www.serviciudad.gov.co/impfacturas/' + this.factura.ciclo + '/' + this.factura.cuenta + '.pdf', '_blank');
  }
}
