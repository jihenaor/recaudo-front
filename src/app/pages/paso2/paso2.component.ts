import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { Factura } from 'src/app/core/factura';
import { ServicesService } from 'src/app/services/services.service';
import { EditorType } from '../home/home.component';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component {
  @Input() paso: string;
  @Output() siguientePaso = new EventEmitter<EditorType>();

  @Input() factura: Factura;
  @Input() facturas: Factura[];

  loading: boolean = false;
  captcha: string;
  email: string;
  siteKey: string;

  constructor(private _formBuilder: FormBuilder,
              private service: ServicesService,
              private reCaptchaV3Service: ReCaptchaV3Service) {
    this.captcha = '';
    this.email = 'jihenaor@gmail.com';
    this.siteKey = '6Ldp77YdAAAAAGcbhuotBuauCT5-sOvyrDFGEObE';
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
  }

  regresar() {
    this.siguientePaso.emit('paso1');
    this.loading = false;
  }

  continuar() {
    this.loading = true;

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

  descargarFactura() {
    window.open('https://www.serviciudad.gov.co/impfacturas/' + this.factura.ciclo + '/' + this.factura.cuenta + '.pdf', '_blank');
  }
}
