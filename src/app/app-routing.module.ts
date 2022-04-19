import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { FormComponent } from './form/form.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

const routes: Routes = [
{
  path: '', //Ajustado para compor o deploy
  component: LivrosComponent
},
{
  path: 'cadastro', 
  component: FormCadastroComponent
},
{
  path: 'selected/:id', 
  component: FormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
