import { Injectable } from '@angular/core';
import { Professional } from '../../list-professionals/list-professionals.component';
import { Establishment } from '../../list-establishments/list-establishments.component';
import { HttpClient } from '@angular/common/http';
import { EstablishmentComponent } from 'src/app/establishment/establishment.component';
import { VPE_JPA_API_URL } from 'src/app/app.constants';
import { Bound } from 'src/app/bound/bound.component';

@Injectable({
  providedIn: 'root'
})
export class BoundsService {

  constructor(private http:HttpClient) { }

  createBound(Establishment: Establishment, Professional: Professional){
    const bound = {
      "establishment": Establishment,
      "professional": Professional
    };
    return this.http.post(`${VPE_JPA_API_URL}/bounds`, bound);
  }

  retrieveBoundByProfessional(id: any){
    return this.http.get<Bound[]>(`${VPE_JPA_API_URL}/bounds/professionals/${id}`);
  }

  retrieveBoundByEstablishment(id: any){
    return this.http.get<Bound[] >(`${VPE_JPA_API_URL}/bounds/establishments/${id}`);
  }


  retrieveAllBounds(){
    return this.http.get<Bound[] >(`${VPE_JPA_API_URL}/bounds`);
  }

  deleteBound(id: any){
    return this.http.delete(`${VPE_JPA_API_URL}/bounds/${id}`)
  }


}
