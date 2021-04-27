import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionalsService } from '../service/data/professionals.service';
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

export class Professional{
  static find(arg0: (x: { id: any; }) => boolean) {
    throw new Error('Method not implemented.');
  }
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public cellPhone: string,
    public homePhone: string,
    public currentFunction: string
  ){}
}

@Component({
  selector: 'app-list-professionals',
  templateUrl: './list-professionals.component.html',
  styleUrls: ['./list-professionals.component.css']
})

export class ListProfessionalsComponent implements OnInit {

  message: string = '';
  professionals: Professional[] = [];
  icons = {
    "faTrash": faTrash, 
    "faEdit": faEdit,
    "faPlus": faPlus,
  }

  constructor(
    private professionalService: ProfessionalsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshProfessionals();
  }

  refreshProfessionals(){
    this.professionalService.retrieveAllProfessionals().subscribe(
      response => {
        this.professionals = response;
        console.log(this.professionals);
      }
    )
  }

  deleteProfessional(id: any){
    this.professionalService.deleteProfessional(id).subscribe(
      response => {
          this.message = "Excluído com sucesso!";
          this.refreshProfessionals();
      },
      err => { this.message = "Não foi possível excluir, verifique a existência de vínculos"}
    )
  }

  updateProfessional(id: any){
    this.router.navigate(['professionals', id])
  }

  addProfessional(){
    this.router.navigate(['professionals', -1])
  }



}
