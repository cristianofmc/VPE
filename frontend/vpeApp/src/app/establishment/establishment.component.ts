import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Establishment } from '../list-establishments/list-establishments.component';
import { EstablishmentsService } from '../service/data/establishments.service'

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})

export class EstablishmentComponent implements OnInit {

  id!: number;
  establishment!: Establishment;

  constructor(
    private establishmentService: EstablishmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.establishment = new Establishment(this.id, '', '', '');

    if(this.id != -1){
      this.establishmentService.retrieveEstablishment(this.id)
      .subscribe(
          data => this.establishment = data
      )
    }
  }

  saveEstablishment(){

    if(this.id == -1){
      this.establishmentService.createEstablishment(this.establishment)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['establishments'])
          }
        )
      
    } else{
      this.establishmentService.updateEstablishment(this.id, this.establishment)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['establishments'])
          }
        )
    }
  }
}
