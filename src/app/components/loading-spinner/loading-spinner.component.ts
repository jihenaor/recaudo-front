import { Component, OnDestroy, inject } from '@angular/core';
import { LoadingService } from '../../services/Loading.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {
  loading = false;
  public loadingService = inject(LoadingService);

}
