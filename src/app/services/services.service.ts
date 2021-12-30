import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url_consultafactura = environment.url_base + 'consultafactura';
  url_session = environment.url_base + 'session';
  header = new HttpHeaders()
  .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {

  }

  postConsultaFactura(data: any):Observable<any> {
    return this.http.post(this.url_consultafactura, data, {
      headers: this.header
    })
  }

  postSession(data: any):Observable<any> {
    return this.http.post(this.url_session, data, {
      headers: this.header
    })
  }
}
