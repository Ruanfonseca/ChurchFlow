import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginAuth } from '../models/LoginAuth';
import { LoginResponseDTO } from '../models/dtos/LoginResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  logar(obj: LoginAuth): Observable<LoginResponseDTO> {

    return this.http.post<LoginResponseDTO>(this.url, obj);
  }



}
