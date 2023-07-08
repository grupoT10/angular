import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../shared/curso.service';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: []
  
})
export class NuevoCursoComponent implements OnInit {

  form?:FormGroup;
  errors: string[]=[];
  
  constructor(
    private fb:FormBuilder,
    private cursoService:CursoService
  ){}

  ngOnInit():void{
    this.form = this.fb.group({
      nomcurso:[,[]],
      descripcion:[,[]]
    })

  }

  create() {
    this.cursoService.create(this.form?.value)
      .subscribe({
        next: data => {
          console.log('data', data);
        },
        error: err => {
          this.errors = err.error.errors;
        }
      })
  }
}
