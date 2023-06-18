import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitluComponent } from './titlu/titlu.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownFormeComponent } from './dropdown-forme/dropdown-forme.component';
import { DropdownCuloareComponent } from './dropdown-culoare/dropdown-culoare.component';
import { ButonGenerareComponent } from './buton-generare/buton-generare.component';
import { ButonDescarcareComponent } from './buton-descarcare/buton-descarcare.component';
import { ParinteComponent } from './parinte/parinte.component';
import { TitleComponent } from './title/title.component';
import { TextboxComponent } from './textbox/textbox.component';
import { AdaugaComponent } from './adauga/adauga.component';

import { environment } from 'src/environments/environment';
import { ListaPersComponent } from './lista-pers/lista-pers.component';

//import { FirestoreModule } from '@angular/fire/firestore';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { FirebaseService } from './firebase.service';
//import { FirebaseService } from './firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    TitluComponent,
    DropdownComponent,
    DropdownFormeComponent,
    DropdownCuloareComponent,
    ButonGenerareComponent,
    ButonDescarcareComponent,
    ParinteComponent,
    TitleComponent,
    TextboxComponent,
    AdaugaComponent,
    ListaPersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFirestoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
