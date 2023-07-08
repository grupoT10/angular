
import { CursoService } from '../shared/curso.service';
import {Curso} from '../shared/curso.model';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.component.html',
  
})
export class ListarCursoComponent {

  curso?:Curso[];

  constructor(
    private cursoService:CursoService
  ){}
    ngOnInit():void{
      this.cursoService.getAll()
      .subscribe(data=>{
        this.curso=data.content;
    })
  }
}
