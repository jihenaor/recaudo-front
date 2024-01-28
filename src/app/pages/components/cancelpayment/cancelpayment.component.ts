import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ConsultarFacturasService } from 'src/app/services/consultarFacturas.service';

@Component({
  selector: 'app-cancelpayment',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './cancelpayment.component.html'
})
export class CancelpaymentComponent {
  public consultarFacturasService = inject(ConsultarFacturasService);

}
