import { Component } from '@angular/core';
import { UsuarioLogado } from 'src/app/models/UsuarioLogado';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  usuarioLogado?: UsuarioLogado;

  constructor(private userService: UserServiceService) {
    this.usuarioLogado = this.userService.getUsuarioLogado();
   }



}
