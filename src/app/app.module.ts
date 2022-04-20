import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormDeletarComponent } from './form-deletar/form-deletar.component';
import { FormAlterarComponent } from './form-alterar/form-alterar.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    FormCadastroComponent,
    FormDeletarComponent,
    FormAlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
