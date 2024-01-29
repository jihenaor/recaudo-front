import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Factura } from '../core/factura';

import { environment } from 'src/environments/environment';
import { LoadingService } from './Loading.service';
import { Observable } from 'rxjs';
import { ClientEvertecResponse } from '../core/ClientEvertecResponse';
import { FacturaRequest } from '../core/FacturaRequest';


interface State {
  facturas: Factura[] | null;
  consultando: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SessionFacturasService {
  private http = inject(HttpClient);
  public loadingService = inject(LoadingService);
  url_session = environment.url_base + '/sessionevertec';

  postSession(data: FacturaRequest): Observable<ClientEvertecResponse> {
    return this.http.post<ClientEvertecResponse>(this.url_session, data);
  }
}
