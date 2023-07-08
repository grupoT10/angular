import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso, CursoPage } from './curso.model';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiBase:string=environment.apiBase;
  
constructor(
  private http: HttpClient
) { }

getAll(){
  return this.http.get<CursoPage>(`${this.apiBase}/admin/curso/lis`);
}

create(curso:Curso){
  return this.http.post<CursoPage>(`${this.apiBase}/admin/curso`,curso);
}

update(id:number,tipocargo:Curso){
  return this.http.post<CursoPage>(`${this.apiBase}/admin/curso/${id}`,tipocargo);

}

delete(id:number){
  return this.http.delete(`${this.apiBase}/admin/curso/${id}`);
}

uploadFile(formData:FormData){
  return this.http.post(`${this.apiBase}/assets/upload`,formData);
}

}
