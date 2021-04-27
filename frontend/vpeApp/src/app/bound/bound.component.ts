import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from '../service/data/professionals.service';
import { Professional } from '../list-professionals/list-professionals.component';
import { EstablishmentsService } from '../service/data/establishments.service';
import { Establishment } from '../list-establishments/list-establishments.component';
import { Router } from '@angular/router';
import { BoundsService } from '../service/data/bounds.service';
import { ProfessionalComponent } from '../professional/professional.component';

export class Bound{
  constructor(
    public id: number,
    public professional: Professional,
    public establishment: Establishment,
  ){}
}

@Component({
  selector: 'app-bound',
  templateUrl: './bound.component.html',
  styleUrls: ['./bound.component.css']
})
export class BoundComponent implements OnInit {

  professionals: Professional[] = [];
  establishments: Establishment[] = [];
  bounds: Bound[] = [];

  selectedProfessional!:number;
  selectedEstablishment!:number;

  objPro: Professional = new Professional(0, '', '', '', '', '');
  objEstb: Establishment = new Establishment(0, '', '', '');

  constructor(
    private professionalService: ProfessionalsService,
    private establishmentService: EstablishmentsService,
    private boundService: BoundsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshProfessionals();
    this.refreshEstablishments();
    this.refreshAllBounds();
  }

  refreshProfessionals(){
    this.professionalService.retrieveAllProfessionals().subscribe(
      response => {
        this.professionals = response;
        console.log(this.professionals);
      }
    )
  }

  refreshEstablishments(){
    this.establishmentService.retrieveAllEstablishments().subscribe(
      response => {
        this.establishments = response;
        console.log(this.establishments);
      }
    )
  }

  saveBound(){

    console.log(this.selectedEstablishment, this.selectedProfessional);
    
    this.objPro = this.professionals[this.professionals.findIndex(item => item.id == this.selectedProfessional)];
    this.objEstb = this.establishments[this.establishments.findIndex(item => item.id == this.selectedEstablishment)];

    this.boundService.createBound(this.objEstb, this.objPro).subscribe(
      data => {
             this.refreshAllBounds();
              }
    );
  }

  deleteBound(id: any){
    this.boundService.deleteBound(id).subscribe(
      response => {
        
        this.refreshAllBounds();
      })

  }

  refreshAllBounds(){
    this.boundService.retrieveAllBounds().subscribe(
      response => {
        console.log('bouds ALL', response);
        
        this.bounds =  response;
      }
    )
  }

}
