import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { UntypedFormBuilder} from '@angular/forms';
import { Factura } from 'src/app/core/factura';
import { ServicesService } from '../../services/services.service';
import { EditorType } from '../home/home.component';
import { ConsultarFacturasService } from 'src/app/services/consultarFacturas.service';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css'],
  providers: [ServicesService]
})
export class Paso1Component {
  public consultarFacturasService = inject(ConsultarFacturasService);

  constructor(private _formBuilder: UntypedFormBuilder,
    private service: ServicesService,) {
  }

  continuar() {
//    this.consultarSaldoCuenta();
//    this.consultarFacturas();
  }

  regresar() {
//    this.consultarSaldoCuenta();
  }

  /*
  consultarSaldoCuenta() {

    if (this.facturaFormGroup.invalid) {
      alert('Digite un numero de cuenta');
      return;
    }
    this.loading = true;

    this.service.postConsultaFactura(this.facturaFormGroup.getRawValue()).subscribe(
      resp => {
        this.loading = false;
        if (!resp || resp === null || !resp.status) {
          alert('El número de cuenta digitado no existe');
        } else {
          switch (resp.status) {
              case 'PENDING':
                alert('La factura que intenta pagar esta en estado pendiente de pago.  Por favor termine la transacción o intentelo de nuevo en 30 minutos');
                break;
              case 'APPROVED':
                alert('La factura se encuentra paga');
                break;
              default:
                if (resp.facturavencida === 'S') {
                  alert('La factura se encuentra vencida. ');
                  break;
                }
                if (resp.aplicado == 'S') {
                  alert('La factura se encuentra paga');
                  break;
                } else {
                  this.siguientePaso.emit('paso2');
                  this.factura.emit(resp);
                }
          }
        }
      },
      error => {
        alert('Se ha presentado un error. Por favor intente realizar el pago mas tarde');
        this.loading = false;
      },
      () => {

      }
    );
  }
*/
/*
  consultarFacturas() {

    if (this.facturaFormGroup.invalid) {
      alert('Digite un numero de cuenta');
      return;
    }
    this.loading = true;

    this.service.postConsultaFacturas(this.facturaFormGroup.getRawValue()).subscribe(
      resp => {
        this.loading = false;

        if (!resp || resp === null || resp.length === 0) {
          alert('El número de cuenta digitado no existe o no existen facturas pendientes de pago ');
        } else {
          this.facturas = resp;
        }
      },
      error => {
        alert('Se ha presentado un error. Por favor intente realizar el pago mas tarde');
        this.loading = false;
      },
      () => {

      }
    );
  }
*/

}
