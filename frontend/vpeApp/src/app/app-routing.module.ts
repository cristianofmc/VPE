import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoundComponent } from './bound/bound.component';
import { ErrorComponent } from './error/error.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { ListBoundsComponent } from './list-bounds/list-bounds.component';
import { ListEstablishmentsComponent } from './list-establishments/list-establishments.component';
import { ListProfessionalsComponent } from './list-professionals/list-professionals.component';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  {path:'', component: ListProfessionalsComponent},

  {path:'professionals', component: ListProfessionalsComponent},
  {path:'professionals/:id', component: ProfessionalComponent},

  {path:'establishments', component: ListEstablishmentsComponent},
  {path:'establishments/:id', component: EstablishmentComponent},

  {path:'bounds', component: BoundComponent},
  {path:'bounds/:id/:id', component: BoundComponent},

  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
