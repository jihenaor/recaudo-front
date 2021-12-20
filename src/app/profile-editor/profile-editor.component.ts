import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ServicesService } from '../services/services.service';

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

  constructor(private _formBuilder: FormBuilder,
              private service: ServicesService) {

            }

  ngOnInit() {
    this.facturaFormGroup = this._formBuilder.group({
      numerofactura: ['270367179', Validators.required],
    });
  }

  async continuar1() {
    const numeroFactura = this.facturaFormGroup.controls['numerofactura'].value;

    this.service.postConsultaFactura(this.facturaFormGroup.getRawValue()).subscribe(resp => {
      this.factura = resp;
    });
  }
}
