import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { toast } from 'bulma-toast'


@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  livroForm!: FormGroup;

  constructor(private bookService: LivroService,
    public router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.livroForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required)
    });
  }

  novoLivro(): void {
    if (this.livroForm.valid) {
      this.bookService.cadastrar(this.livroForm.value).subscribe(res => {
        toast({message: 'Registro cadastrado com sucesso!', type: 'is-success'})
        this.router.navigate(['/']);
      });
    } else {
      toast({ message: 'Dados ausentes, preencha todos os campos!', type: 'is-danger'})
    }
  }

  onSubmit(): void {
    console.log(this.livroForm.value);
  }

}
