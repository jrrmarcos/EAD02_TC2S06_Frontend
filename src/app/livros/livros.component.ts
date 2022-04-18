import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/Livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  listaLivro: Livro[] = [];

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.bookService.listarLivros().subscribe( res => {
      this.listaLivro = res;
    });
  }

  selecionar(book: Livro): void{
    location.assign('/selected/' + book._id);
  }

  constructor(private bookService: LivroService) { }

}
