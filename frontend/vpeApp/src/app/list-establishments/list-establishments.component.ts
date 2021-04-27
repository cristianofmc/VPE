import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstablishmentsService } from '../service/data/establishments.service';

export class Establishment{
  constructor(
    public id: number,
    public name: string,
    public address: string,
    public phone: string
  ){}
}

@Component({
  selector: 'app-list-establishments',
  templateUrl: './list-establishments.component.html',
  styleUrls: ['./list-establishments.component.css']
})

export class ListEstablishmentsComponent implements OnInit {

  message: string = '';
  establishments: Establishment[] = [];

  constructor(
    private establishmentService: EstablishmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshEstablishments();
  }

  refreshEstablishments(){
    this.establishmentService.retrieveAllEstablishments().subscribe(
      response => {
        this.establishments = response;
        console.log(this.establishments);
      }
    )
  }

  deleteEstablishment(id: any){
    this.establishmentService.deleteEstablishment(id).subscribe(
      response => {
          this.message = "Excluído com sucesso!";
          this.refreshEstablishments();
      },
      err => { this.message = "Não foi possível excluir, verifique a existência de vínculos"}
    )
  }

  updateEstablishment(id: any){
    this.router.navigate(['establishments', id])
  }

  addEstablishment(){
    this.router.navigate(['establishments', -1])
  }



}
