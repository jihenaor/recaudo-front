import { Component, Input } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    MatTabsModule,
    MatChipsModule
  ],
  templateUrl: './stepper.component.html',
})
export class StepperComponent {
  @Input() step: number;

}
