import { Injectable } from '@angular/core';
import { UsuarioLogado } from '../models/UsuarioLogado';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  private usuarioLogado?: UsuarioLogado;

  setUsuarioLogado(usuario: UsuarioLogado) {
    this.usuarioLogado = usuario;
  }

  getUsuarioLogado() {
    return this.usuarioLogado;
  }
}
