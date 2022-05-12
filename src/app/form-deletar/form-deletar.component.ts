import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../model/Livro';
import { toast } from 'bulma-toast'

@Component({
  selector: 'app-form-deletar',
  templateUrl: './form-deletar.component.html',
  styleUrls: ['./form-deletar.component.css']
})
export class FormDeletarComponent implements OnInit {

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

  deletarLivro(): void {
    if (this.livroForm.valid) {
      this.bookService.deletar(`${this.book._id}`).subscribe(res => {
        res.ok ? toast({ message: 'Registro deletado com sucesso!', type: 'is-success' }) : ({ message: 'Falha ao deletar!', type: 'is-danger' });
        this.router.navigate(['/']);
      });
    } else {
      toast({ message: 'Dados ausentes, preencha todos os dados!', type: 'is-danger' })
    }
  }

  initForm(): void {
    this.livroForm = new FormGroup({
      titulo: new FormControl(null),
      descricao: new FormControl(null),
      preco: new FormControl(null)
    });
  }
}