import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url_consultafactura = '/api/consultafactura';

  constructor(private http: HttpClient) { 
    
  }

  postConsultaFactura(data: any):Observable<any> {
    let header = new HttpHeaders()
                      .set('Content-Type', 'application/json');
    console.log(data);
    return this.http.post(this.url_consultafactura, data, {
      headers: header
    })
  }
}
