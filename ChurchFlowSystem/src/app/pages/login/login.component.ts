// login.component.ts
import { Component } from '@angular/core';
import { LoginAuth } from 'src/app/models/LoginAuth';
import { UsuarioLogado } from 'src/app/models/UsuarioLogado';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginAuth = new LoginAuth();
  usuarioLogado = new UsuarioLogado();
  retornoCadastro: string = '';
  mensagemRetorno: string = '';

  constructor(
    private loginservice: LoginService,
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserServiceService
  ) { }

  logar() {

    if (!this.LoginAuth.login || this.LoginAuth.login.trim() === '' || !this.LoginAuth.password || this.LoginAuth.password.trim() === '') {
      this.retornoCadastro = 'error';
      this.mensagemRetorno = 'Preencha todos os campos.';
      return;
    }

    this.loginservice.logar(this.LoginAuth).subscribe((res: any) => {
      this.userService.setUsuarioLogado(res);
      this.authService.authenticate(true);
      this.router.navigateByUrl('dashboard');
    });
  }
}


