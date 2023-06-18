import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Licenta';
  personName: string = '';
  pdfUrl: string = '';
  option1: string ='';
  option2: string ='';
  option3: string ='';
constructor(private http: HttpClient){}

  onOption1Selected(option: string) {
    this.option1 = option;
    console.log('optiunea',this.option1);
    this.generareURL();
  }

  onOption2Selected(option: string) {
    this.option2 = option;
    console.log('optiunea',this.option2);
    this.generareURL();
  }

  onOption3Selected(option: string) {
    this.option3 = option;
    console.log('optiunea',this.option3);
    this.generareURL();
  }
  addName() {

    console.log('Numele adăugat:', this.personName);
    const data = {Nume: this.personName};
    this.http.post('https://licentadate-default-rtdb.firebaseio.com/Nume.json', data).subscribe((res) =>{
      console.log(res);
    });
    this.generareURL();
    this.personName = '';
  }

  generateURL() {
    const url = `http://localhost:8080/pdf/generate?cifra=${this.option1}&figura=${this.option2}&culoare=${this.option3}&nume=${this.personName}`;
    window.open(this.pdfUrl, '_blank');
  }
  generareURL(){
    this.pdfUrl = `http://localhost:8080/pdf/generate?cifra=${this.option1}&figura=${this.option2}&culoare=${this.option3}&nume=${this.personName}`;

  }
  onNameChange(name: string) {
    console.log('Numele schimbat:', name);
  }

  onButtonClick() {
    console.log('Buton apăsat!');
  }
  
  
  
}
