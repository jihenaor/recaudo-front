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

    console.log('Resolved captcha with response: ' + this.captcha);
  }

  regresar() {
    this.siguientePaso.emit('paso1');
    this.loading = false;
  }

  continuar() {
    this.loading = true;

    this.service.postSession({"codsuscrip": this.factura.cuenta}).subscribe(resp => {
      this.loading = false;
      window.location.href = resp.processUrl;
    });
  }
}
