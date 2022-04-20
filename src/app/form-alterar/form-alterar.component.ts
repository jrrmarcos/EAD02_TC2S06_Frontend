import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../model/Livro';

@Component({
  selector: 'app-form-alterar',
  templateUrl: './form-alterar.component.html',
  styleUrls: ['./form-alterar.component.css']
})
export class FormAlterarComponent implements OnInit {

  livroForm!: FormGroup;
  selectedId!: string;
  selectedBookById!: Livro;

  constructor(private bookService: LivroService,
    public router: Router) { }
    
  ngOnInit(): void {
    this.initForm();
    if (this.router.url !== '') {
      this.getId();
    }
  }
  
  atualizarLivro(): void {
    this.bookService.atualizar(this.livroForm.value, this.selectedBookById._id).subscribe(res => {
      res.ok ? alert('Registro alterado com sucesso!') : alert('Falha ao alterar o registro.');
      this.router.navigate(['/']);
    });
  }

  getId(): void {
    this.selectedId = (this.router.url.split('/')[2]);
    if (this.selectedId == this.router.url.split('/')[2]) {
      this.bookService.listarLivro(this.selectedId).subscribe((book: Livro) => {
        this.selectedBookById = book;
        this.livroForm.setValue({
          titulo: this.selectedBookById.titulo,
          descricao: this.selectedBookById.descricao,
          preco: this.selectedBookById.preco,
        });
      });
    } else {
      alert('Url inválida!')
      this.router.navigate(['/']);
    }
  }

  initForm(): void {
    this.livroForm = new FormGroup({
      titulo: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null)
    });
  }

  onSubmit(): void {
    console.log(this.livroForm.value);
  }
}
