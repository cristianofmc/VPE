import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professional } from '../list-professionals/list-professionals.component';
import { ProfessionalsService } from '../service/data/professionals.service'
import { BoundsService } from '../service/data/bounds.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})

export class ProfessionalComponent implements OnInit {

  id!: number;
  professional!: Professional;


  constructor(
    private professionalService: ProfessionalsService,
    private boundService: BoundsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.professional = new Professional(this.id, '', '', '', '', '');
    if(this.id != -1){
      this.professionalService.retrieveProfessional(this.id)
      .subscribe(
          data => this.professional = data
      )
    }
  }


  saveProfessional(){

    if(this.id == -1){
      this.professionalService.createProfessional(this.professional)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['professionals'])
          }
        )
      
    } else{
      this.professionalService.updateProfessional(this.id, this.professional)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['professionals'])
          }
        )
    }
  }
}
