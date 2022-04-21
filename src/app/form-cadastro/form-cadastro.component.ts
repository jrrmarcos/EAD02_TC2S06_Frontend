import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from '../livro.service';

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

  novoLivro(): void {
    if (this.livroForm.valid) {
      this.bookService.cadastrar(this.livroForm.value).subscribe(res => {
        res.ok ? alert('Livro cadastrado com sucesso!') : alert('Falha ao cadastrar novo livro.');
        this.router.navigate(['/']);
      });
    } else {
      this.initForm()
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
