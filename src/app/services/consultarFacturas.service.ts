import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../core/factura';
import { environment } from 'src/environments/environment';


interface State {
  facturas: Factura[] | null;
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultarFacturasService {
  private http = inject(HttpClient);
  public facturas = computed(() => this.#state().facturas);

  #state = signal<State>({
    facturas: [],
    loading: true,
  })

  constructor() {
  }


  public postConsultaFacturas(data: any): void {
    this.http
      .post<Factura[]>(`${environment.url_base}/consultafacturas`, data)
      .subscribe((resp: Factura[]) => {
        this.#state.set({
          loading: false,
          facturas: resp
        });
      });
   }
}
