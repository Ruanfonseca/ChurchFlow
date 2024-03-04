import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { secundaryRecuperationDTO } from '../models/dtos/secundaryRecuperationDTO';

@Injectable({
  providedIn: 'root'
})
export class SecundaryService {

  private url: string = 'http://localhost:8080/auth/recuperationSecundary';

  constructor(private http: HttpClient) { }

  recuperacaoSecundary(obj: secundaryRecuperationDTO): Observable<any> {

    return this.http.post<any>(this.url, obj);
  }
}
