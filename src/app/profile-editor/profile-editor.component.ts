import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
  providers: [ServicesService]
})
export class ProfileEditorComponent implements OnInit {
  facturaFormGroup: FormGroup;
  isEditable = false;
  public factura: any;
  captcha: string;
  email: string;
  siteKey: string;
  loading: boolean = false;

  aFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private service: ServicesService,
              private reCaptchaV3Service: ReCaptchaV3Service) {
    this.captcha = '';
    this.email = 'jihenaor@gmail.com';
    this.siteKey = '6Ldp77YdAAAAAGcbhuotBuauCT5-sOvyrDFGEObE';
  }

  ngOnInit() {
    this.facturaFormGroup = this._formBuilder.group({
      numerofactura: ['270367179', Validators.required],
    });

    this.aFormGroup = this._formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  continuar1() {
    this.loading = true;

    this.service.postConsultaFactura(this.facturaFormGroup.getRawValue()).subscribe(resp => {
      this.factura = resp;
      this.loading = false;
    });
  }

  continuar2() {
    this.loading = true;

    this.service.postSession(this.facturaFormGroup.getRawValue()).subscribe(resp => {
      this.loading = false;
      window.location.href = resp.processUrl;
    });
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;

    console.log('Resolved captcha with response: ' + this.captcha);
  }
}
