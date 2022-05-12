import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../model/Livro';
import { toast } from 'bulma-toast'

@Component({
  selector: 'app-form-alterar',
  templateUrl: './form-alterar.component.html',
  styleUrls: ['./form-alterar.component.css']
})
export class FormAlterarComponent implements OnInit {

  livroForm!: FormGroup;
  book: Livro

  constructor(private bookService: LivroService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm()
    const id = this.route.snapshot.paramMap.get('id')
    this.bookService.listarLivro(id).subscribe(book => {
      this.book = book
    })
  }

  atualizarLivro(): void {
    if (this.livroForm.valid) {
    this.book.titulo = this.livroForm.get('titulo').value;
    this.book.descricao = this.livroForm.get('descricao').value;
    this.book.preco = this.livroForm.get('preco').value;
      this.bookService.atualizar(this.book).subscribe(res => {
        toast({ message: 'Registro alterado com sucesso!', type: 'is-success' })
        this.router.navigate(['/']);
      });
    } else {
      toast({ message: 'Dados ausentes, preencha todos os campos!', type: 'is-danger' })
    }
  }

  initForm(): void {
    this.livroForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required)
    });
  }
}
