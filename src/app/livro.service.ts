import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './model/Livro';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseURL = 'https://sc3003302.glitch.me/api';

  constructor(private http: HttpClient,
              private router: Router) { }

  listarLivro(id: string): Observable<Livro> {
    return this.http.get<Livro>(this.baseURL + '/produtos/' + id);
  }

  listarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseURL + '/produtos');
  }

  cadastrar(book: { titulo: string, descricao: string, preco: number }): Observable<any> {
    let body = new HttpParams();
    body = body.set('titulo', book.titulo);
    if (book.titulo == null) {
      alert('Título não pode estar vazio!')
    } else {
      body = body.set('descricao', book.descricao);
      body = body.set('preco', String(book.preco));
      return this.http.post(this.baseURL + '/produtos', body, { observe: 'response' });
    }
    return this.http.get<Livro[]>(this.baseURL + '/produtos');
  }


  atualizar(book: { titulo: string, descricao: string, preco: number }, id: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('titulo', book.titulo);
    if (book.titulo == '') {
      alert('Título não pode estar vazio!')
    } else {
      body = body.set('descricao', book.descricao);
      body = body.set('preco', String(book.preco));
      return this.http.put(this.baseURL + '/produtos/' + id, body, { observe: 'response' });
    }  
    return this.http.get<Livro[]>(this.baseURL + '/produtos');
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(this.baseURL + '/produtos/' + id, { observe: 'response' });
  }
}
