import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paso1Component } from './paso1/paso1.component';
import { Paso2Component } from './paso2/paso2.component';
import { Paso3Component } from './paso3/paso3.component';
import { HomeComponent } from './home/home.component';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { TestComponent } from './test/test.component';
import { ValidarpagoComponent } from './validarpago/validarpago.component';


@NgModule({
  declarations: [
    Paso1Component,
    Paso2Component,
    Paso3Component,
    HomeComponent,
    TestComponent,
    ValidarpagoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
