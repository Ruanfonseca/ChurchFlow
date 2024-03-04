// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecuperacaosenhaComponent } from './pages/recuperacaosenha/recuperacaosenha.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SecundaryComponent } from './pages/secundary/secundary.component';
import { AuthGuard }from'./utils/AuthGuardUtil';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'esquecisenha',
    component: RecuperacaosenhaComponent,
  },
  {
    path: 'secundary',
    component: SecundaryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
