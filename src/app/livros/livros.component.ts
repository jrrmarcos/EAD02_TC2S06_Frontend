import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/Livro';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  listaLivro: Livro[] = [];
  selectedId!: string;

  constructor(private bookService: LivroService,
    private router: Router) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.bookService.listarLivros().subscribe(res => {
      this.listaLivro = res;
    });
  }
  
}
