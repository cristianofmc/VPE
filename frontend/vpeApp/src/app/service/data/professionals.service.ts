import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professional } from '../../list-professionals/list-professionals.component';
import { VPE_JPA_API_URL} from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})

export class ProfessionalsService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllProfessionals(){
    return this.http.get<Professional[]>(`${VPE_JPA_API_URL}/professionals`);
  }

  deleteProfessional(id: any){
    return this.http.delete(`${VPE_JPA_API_URL}/professionals/${id}`)
  }

  retrieveProfessional(id: any){
    return this.http.get<Professional>(`${VPE_JPA_API_URL}/professionals/${id}`)
  }

  updateProfessional(id: any, Professional: Professional){
    return this.http.put(`${VPE_JPA_API_URL}/professionals/${id}`, Professional);
  }

  createProfessional( Professional: Professional){
    return this.http.post(`${VPE_JPA_API_URL}/professionals`, Professional);
  }
  
}
