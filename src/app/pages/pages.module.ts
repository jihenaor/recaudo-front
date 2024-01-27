import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paso1Component } from './paso1/paso1.component';
import { Paso2Component } from './paso2/paso2.component';
import { Paso3Component } from './paso3/paso3.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestComponent } from './test/test.component';
import { ValidarpagoComponent } from './validarpago/validarpago.component';
import { PaymentInstructionsComponent } from './components/PaymentInstructions/PaymentInstructions.component';

import { FormularioSeleccionCuentaComponent } from './components/formulario-seleccion-cuenta/formulario-seleccion-cuenta.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    Paso1Component,
    Paso2Component,
    Paso3Component,
    HomeComponent,
    TestComponent,
    ValidarpagoComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    PaymentInstructionsComponent,
    FormularioSeleccionCuentaComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
