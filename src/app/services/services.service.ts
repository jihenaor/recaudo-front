import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagoRequest } from '../core/pagorequest';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url_consultafactura = environment.url_base + 'consultafactura';
  url_session = environment.url_base + 'session';
  url_pagarfactura = environment.url_base + 'pagarfactura';
  url_test = environment.url_base + 'test';
  url_consultafacturas = environment.url_base + 'consultafacturas';

  header = new HttpHeaders()
  .set('Content-Type', 'application/json');
//  .set('Access-Control-Allow-Origin', '*')
//  .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  /*
  .set('Access-Control-Allow-Credentials', 'true')
  .set('Access-Control-Allow-Headers', 'Content-Type')

  .set('key', 'x-api-key');
*/
//  .set('value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x');

  constructor(private http: HttpClient) {

  }
/*
  postConsultaFactura(data: any):Observable<any> {
    return this.http.post(this.url_consultafactura, data, {
      headers: this.header
    })
  }
*/
  postConsultaFactura(data: any):Observable<any> {
    return this.http.post(this.url_consultafactura, data)
  }

  postSession(data: any):Observable<any> {
    return this.http.post(this.url_session, data, {
      headers: this.header
    })
  }

  postPagarFactura(data: PagoRequest):Observable<any> {
    return this.http.post(this.url_pagarfactura, data, {
      headers: this.header
    })
  }

  getTest(): Observable<any> {
    return this.http.get<any>(this.url_test)
  }
}
