import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../core/factura';
import { environment } from 'src/environments/environment';
import { LoadingService } from './Loading.service';


interface State {
  facturas: Factura[] | null;
  consultando: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultarFacturasService {
  private http = inject(HttpClient);
  public loadingService = inject(LoadingService);

  public facturas = computed(() => this.#state().facturas || []);
  public consultando = computed(() => this.#state().consultando);

  #state = signal<State>({
    facturas: [],
    consultando: false
  })

  public postConsultaFacturas(data: any): void {
    this.loadingService.setLoading(true);

    this.http
    .post<Factura[]>(`${environment.url_base}/consultafacturas`, data)
    .subscribe({
      next: (resp: Factura[]) => {

        this.loadingService.setLoading(false);
        this.#state.set({
          facturas: resp,
          consultando: true
        });

        if (!resp || resp.length === 0) {
          alert('El número de cuenta digitado no existe o no existen facturas pendientes de pago ');
        }
      },
      error: (error) => {

        this.loadingService.setLoading(false);
        console.error('Error al consultar facturas:', error);
        alert('Error al realizar la consulta. Por favor intente más tarde.');
      }
    });
  }

  clear() {
    this.#state.set({
      facturas: [],
      consultando: false
    });
  }

}
