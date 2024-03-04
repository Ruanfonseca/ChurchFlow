import { CadastroServiceService } from 'src/app/services/cadastro-service.service';
import { Usuario } from './../../models/Usuario';
import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';
import { validarEmail, validarSenha } from 'src/app/utils/validador';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  usuario = new Usuario();
  roleOptions = ['USER', 'ADMIN'];
  retornoCadastro: string = '';
  mensagemRetorno: string = '';

  constructor(private servico: CadastroServiceService,private router:Router) {

  }

  cadastrar(): void {
    if (
      this.usuario.login === '' ||
      this.usuario.password === '' ||
      this.usuario.name === '' ||
      this.usuario.role === ''
    ) {
      this.usuario = new Usuario();
      this.retornoCadastro = 'error';
      this.mensagemRetorno = 'Preencha todos os campos.';
      return;

    }else if (!validarEmail(this.usuario.login) && !validarSenha(this.usuario.password)) {
      this.usuario = new Usuario();
      this.retornoCadastro = 'error';
      this.mensagemRetorno = 'Email ou senha inválidos';
      return
   }


    this.servico.cadastrar(this.usuario).subscribe(
      (res:any) => {
          this.usuario = new Usuario();
           this.retornoCadastro = 'success';
            this.mensagemRetorno = 'Cadastro finalizado!';

          //this.router.navigateByUrl('/');

      },
      (error) => {
        console.error(error);
        this.usuario = new Usuario();
        this.retornoCadastro = 'error';
        this.mensagemRetorno = 'Já Existe alguém usando esse email. Por favor, tente novamente.';
      }
    );
  }

}
