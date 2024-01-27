import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultarFacturasService } from 'src/app/services/consultarFacturas.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingService } from '../../../services/Loading.service';

@Component({
  selector: 'app-formulario-seleccion-cuenta',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './formulario-seleccion-cuenta.component.html'
})
export class FormularioSeleccionCuentaComponent {
  facturaFormGroup: FormGroup;
  public loadingService = inject(LoadingService);
  public consultarFacturasService = inject(ConsultarFacturasService);

  ngOnInit() {
    this.facturaFormGroup = new FormGroup({
      codsuscrip: new FormControl('', [Validators.required,
          Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(15)]),
    });
  }

  buscarFacturas() {
      if (this.facturaFormGroup.invalid) {
        alert('Digite un número de cuenta');
        return;
      }

      this.consultarFacturasService.postConsultaFacturas(this.facturaFormGroup.getRawValue());

    }
}