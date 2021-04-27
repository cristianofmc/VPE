import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProfessionalsComponent } from './list-professionals/list-professionals.component';
import { ListEstablishmentsComponent } from './list-establishments/list-establishments.component';
import { ListBoundsComponent } from './list-bounds/list-bounds.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { ProfessionalComponent } from './professional/professional.component';
import { BoundComponent } from './bound/bound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListProfessionalsComponent,
    ListEstablishmentsComponent,
    ListBoundsComponent,
    ErrorComponent,
    MenuComponent,
    EstablishmentComponent,
    ProfessionalComponent,
    BoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
