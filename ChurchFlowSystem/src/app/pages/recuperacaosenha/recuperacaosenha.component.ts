import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { recuperacaoDTO } from 'src/app/models/dtos/recuperacaoDTO';
import { UsuarioLogado } from 'src/app/models/UsuarioLogado';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecuperacaoDeSenhaService } from './../../services/recuperacao-de-senha.service';

@Component({
  selector: 'app-recuperacaosenha',
  templateUrl: './recuperacaosenha.component.html',
  styleUrls: ['./recuperacaosenha.component.css']
})
export class RecuperacaosenhaComponent {

  recuperacaodto = new recuperacaoDTO();
  retornoCadastro: string = '';
  mensagemRetorno: string = '';
  Auntenticado: boolean = false;
  usuarioLogado = new UsuarioLogado();


  constructor(private authService: AuthenticationService, private http: HttpClient, private router: Router, private Service: RecuperacaoDeSenhaService) {

  }

  onRecuperacao(): void{

    if (!this.recuperacaodto.login || this.recuperacaodto.login.trim() === '') {
      this.retornoCadastro = 'error';
      this.mensagemRetorno = 'Preencha todos os campos.';
      return

    }

    this.Service.recuperacao(this.recuperacaodto).subscribe(

      (res:any) => {
        this.Auntenticado = true;
        this.authService.authenticate(true);
        this.router.navigateByUrl('secundary');
      },
      (error) => {
        console.error(error);

        this.retornoCadastro = 'error';
        this.mensagemRetorno = 'Houve um erro no processamento do usuario';
        return
      }
    );




  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    if (!this.Auntenticado)
      return this.router.parseUrl('');
    else
      return true;
  }
}
