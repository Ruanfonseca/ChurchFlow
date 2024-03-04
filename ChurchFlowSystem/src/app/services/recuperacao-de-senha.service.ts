import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { recuperacaoDTO } from '../models/dtos/recuperacaoDTO';

@Injectable({
  providedIn: 'root'
})
export class RecuperacaoDeSenhaService {

  private url: string = 'http://localhost:8080/auth/validUser';

  constructor(private http: HttpClient) {

  }

  recuperacao(obj: recuperacaoDTO): Observable<Usuario> {

    return this.http.post<Usuario>(this.url, obj.login);

  }






}
