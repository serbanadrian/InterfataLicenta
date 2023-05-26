import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitluComponent } from './titlu/titlu.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownFormeComponent } from './dropdown-forme/dropdown-forme.component';
import { DropdownCuloareComponent } from './dropdown-culoare/dropdown-culoare.component';
import { ButonGenerareComponent } from './buton-generare/buton-generare.component';
import { ButonDescarcareComponent } from './buton-descarcare/buton-descarcare.component';
import { ParinteComponent } from './parinte/parinte.component';

@NgModule({
  declarations: [
    AppComponent,
    TitluComponent,
    DropdownComponent,
    DropdownFormeComponent,
    DropdownCuloareComponent,
    ButonGenerareComponent,
    ButonDescarcareComponent,
    ParinteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
