import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RecuperacaosenhaComponent } from './pages/recuperacaosenha/recuperacaosenha.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecundaryComponent } from './pages/secundary/secundary.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RecuperacaosenhaComponent,
    DashboardComponent,
    SecundaryComponent,

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
