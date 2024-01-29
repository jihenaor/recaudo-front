import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoadingService } from './Loading.service';
import { PagoResponse } from '../core/PagoResponse';
import { PagoRequest } from '../core/pagorequest';

interface State {
  pagoResponse: PagoResponse | null;
}

@Injectable({
  providedIn: 'root'
})
export class PagarFacturaService {
  private http = inject(HttpClient);
  public loadingService = inject(LoadingService);

  public pagoResponse = computed(() => this.#state().pagoResponse || null);

  #state = signal<State>({
    pagoResponse: null
  })

  public postPagarFactura(data: PagoRequest): void {
    this.loadingService.setLoading(true);

    this.http
    .post<PagoResponse>(`${environment.url_base}/pagarfactura`, data)
    .subscribe({
      next: (resp: PagoResponse) => {

        this.loadingService.setLoading(false);
        this.#state.set({
          pagoResponse: resp
        });
      },
      error: (error) => {
        this.loadingService.setLoading(false);
        console.error('Error al consultar facturas:', error);
        alert('Error al realizar la consulta. Por favor intente más tarde.');
      }
    });
  }
}
