import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
{
  path: '', 
  component: LivrosComponent
},
{
  path: 'cadastro', 
  component: FormComponent},
{
  path: 'selected/:id', 
  component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
