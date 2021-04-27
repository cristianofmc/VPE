import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Establishment } from '../../list-establishments/list-establishments.component';
import { VPE_JPA_API_URL} from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})

export class EstablishmentsService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllEstablishments(){
    return this.http.get<Establishment[]>(`${VPE_JPA_API_URL}/establishments`);
  }

  deleteEstablishment(id: any){
    return this.http.delete(`${VPE_JPA_API_URL}/establishments/${id}`)
  }

  retrieveEstablishment(id: any){
    return this.http.get<Establishment>(`${VPE_JPA_API_URL}/establishments/${id}`)
  }

  updateEstablishment(id: any, Establishment: Establishment){
    return this.http.put(`${VPE_JPA_API_URL}/establishments/${id}`, Establishment);
  }

  createEstablishment( Establishment: Establishment){
    return this.http.post(`${VPE_JPA_API_URL}/establishments`, Establishment);
  }
  
}
