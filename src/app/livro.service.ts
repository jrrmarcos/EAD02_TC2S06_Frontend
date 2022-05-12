import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Livro } from './model/Livro';
import { Router } from '@angular/router';
import { toast } from 'bulma-toast'
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseURL = 'https://sc3003302.glitch.me/api';

  constructor(private http: HttpClient,
    private router: Router) { }


  tratamentodeErros(e: any): Observable<any> {
    toast({ message: 'Ocorreu um erro!', type: 'is-danger' })
    console.clear()
    this.router.navigate(['/people'])
    return EMPTY
  }

  listarLivro(id: string): Observable<Livro> {
    return this.http.get<Livro>(this.baseURL + '/produtos/' + id).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  listarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseURL + '/produtos').pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  cadastrar(book: Livro): Observable<Livro> {
    const url = `${this.baseURL}/produtos/`
    return this.http.post(url, book, { observe: 'response' }).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  atualizar(book: Livro): Observable<Livro> {
    const url = `${this.baseURL}/produtos/${book._id}`
    return this.http.put<Livro>(url, book,{ observe: 'response' }).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }

  deletar(id: string): Observable<any> {
    return this.http.delete(this.baseURL + '/produtos/' + id, { observe: 'response' }).pipe(
      map(obj => obj),
      catchError(e => this.tratamentodeErros(e))
    )
  }
}