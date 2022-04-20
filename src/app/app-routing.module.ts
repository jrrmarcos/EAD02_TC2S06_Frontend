import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { FormDeletarComponent } from './form-deletar/form-deletar.component';
import { FormAlterarComponent } from './form-alterar/form-alterar.component';

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
  path: 'deletar/:id',
  component: FormDeletarComponent
},
{
  path: 'alterar/:id',
  component: FormAlterarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
