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
      codsuscrip: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(15)]],
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
}
