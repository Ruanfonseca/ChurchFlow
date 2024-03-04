import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecundaryService } from 'src/app/services/secundary.service';
import { secundaryRecuperationDTO } from '../../models/dtos/secundaryRecuperationDTO';

@Component({
  selector: 'app-secundary',
  templateUrl: './secundary.component.html',
  styleUrls: ['./secundary.component.css']
})
export class SecundaryComponent {
  secundaryRecuperationdto = new secundaryRecuperationDTO();

  retornoCadastro: string = '';
  mensagemRetorno: string = '';

  constructor(private http: HttpClient, private router: Router, private Service: SecundaryService) {

  }
  onRecuperacaoSecundary() {
    if (this.secundaryRecuperationdto.newPassword ==='' || this.secundaryRecuperationdto.confirmPassword ==='') {

      this.retornoCadastro = 'error';
      this.mensagemRetorno = 'Preencha todos os campos.';
      return

    } else if (this.secundaryRecuperationdto.newPassword != this.secundaryRecuperationdto.confirmPassword) {

      this.retornoCadastro = 'error';
      this.mensagemRetorno = 'As senhas são diferentes , preencha da forma correta.';
      return

    }


    this.Service.recuperacaoSecundary(this.secundaryRecuperationdto).subscribe(
      (res: any) => {
        this.retornoCadastro = 'success';
        this.mensagemRetorno = 'Senha Alterada!';
        this.router.navigateByUrl('/login');

        //this.router.navigateByUrl('/');

      },
      (error) => {
        console.error(error);
        this.retornoCadastro = 'error';
        this.mensagemRetorno = 'Houve um erro no processamento das mudanças';
        return
      }
    );




  }
}
