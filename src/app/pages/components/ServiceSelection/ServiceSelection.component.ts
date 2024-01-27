import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { LoadingService } from 'src/app/services/Loading.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-service-selection',
  template: `
    <form [formGroup]="facturaFormGroup">
      <section class='FlexContainer'>
        <div>
          <div>
            <ng-template matStepLabel>Selecciona tu servicio</ng-template>
            <mat-form-field appearance="fill">
              <mat-label>Cuenta</mat-label>
              <input matInput formControlName="codsuscrip" placeholder="Digite el número de documento de la factura"
                maxlength="14" required>
            </mat-form-field>
          </div>
        </div>
        <div>
          <div class="div_botones">
            <button mat-button matStepperNext [disabled]="!facturaFormGroup.valid"
              class="btn-large waves-effect waves-light servi element" (click)="continuar()">
              Continuar
            </button>
            <mat-spinner [diameter]="50" class="element" *ngIf="loadingService.loading$"></mat-spinner>
          </div>

        </div>
      </section>

    </form>

  `,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class ServiceSelectionComponent implements OnInit {
  facturaFormGroup: FormGroup;
  @Output() onContinue = new EventEmitter<string>();
  seleccionFormGroup: UntypedFormGroup;

  constructor(public loadingService: LoadingService) {}


  ngOnInit() {
    this.facturaFormGroup = new FormGroup({
      codsuscrip: new FormControl('', [Validators.required,
          Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(15)]),
    });

    this.loadingService.loading$.subscribe(loading => {
      // Lógica cuando el estado de carga cambia
    });

  }

  continuar() {
    if (this.seleccionFormGroup.valid) {
      this.onContinue.emit(this.seleccionFormGroup.value.codsuscrip);
    }
  }
}
