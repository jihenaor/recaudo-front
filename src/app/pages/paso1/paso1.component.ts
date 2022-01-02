import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Factura } from 'src/app/core/factura';
import { ServicesService } from '../../services/services.service';
import { EditorType } from '../home/home.component';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css'],
  providers: [ServicesService]
})
export class Paso1Component implements OnInit {
  facturaFormGroup: FormGroup;
  isEditable = false;
  @Input() paso: string;
  @Output() siguientePaso = new EventEmitter<EditorType>();
  @Output() factura = new EventEmitter<Factura>();

  loading: boolean = false;

  aFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private service: ServicesService,) {
  }

  ngOnInit() {
    this.facturaFormGroup = this._formBuilder.group({
      codsuscrip: ['808495', Validators.required],
    });

    this.aFormGroup = this._formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  continuar() {
    this.consultarSaldoCuenta();
  }

  regresar() {
    this.consultarSaldoCuenta();
  }

  consultarSaldoCuenta() {
    this.loading = true;

    this.service.postConsultaFactura(this.facturaFormGroup.getRawValue()).subscribe(resp => {
      this.loading = false;
      switch (resp.status) {
        case 'PENDING':
          alert('La factura que intenta pagar esta en estado pendiente de pago.  Por favor termine la transacción o intentelo de nuevo en 30 minutos');
          break;
        case 'APPROVED':
          alert('La factura se encuentra paga');
          break;
        default:
          this.siguientePaso.emit('paso2');
          this.factura.emit(resp);  
      }
    });
  }

}
