import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Licenta';
  pdfUrl: string = '';
  option1: string ='';
  option2: string ='';
  option3: string ='';

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

  generateURL() {
    const url = `http://localhost:8080/pdf/generate?cifra=${this.option1}&figura=${this.option2}&culoare=${this.option3}`;
    window.open(this.pdfUrl, '_blank');
  }
  generareURL(){
    this.pdfUrl = `http://localhost:8080/pdf/generate?cifra=${this.option1}&figura=${this.option2}&culoare=${this.option3}`;

  }


}
