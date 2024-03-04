import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {


private url:string = 'http://localhost:8080/auth/register'


  constructor(private http: HttpClient) { }

  cadastrar(obj: Usuario):Observable<Usuario> {
    
    return this.http.post<Usuario>(this.url, obj);
  }


}
