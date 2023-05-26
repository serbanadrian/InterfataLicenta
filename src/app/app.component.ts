import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Licenta';
 // pdfUrl: string = '';
  option1: string ='';
  option2: string ='';
  option3: string ='';

  onOption1Selected(option: string) {
    this.option1 = option;
    console.log('optiunea',this.option1);
  }

  onOption2Selected(option: string) {
    this.option2 = option;
    console.log('optiunea',this.option2);
  }

  onOption3Selected(option: string) {
    this.option3 = option;
    console.log('optiunea',this.option3);
  }

  generateURL() {
    const url = `http://localhost:8080/pdf/generate?cifra=${this.option1}&figura=${this.option2}&culoare=${this.option3}`;
    window.location.href = url;
  }
  // previewPDF() {
  //   const pdfUrl = `http://localhost:8080/pdf/generate?cifra=${this.option1}&figura=${this.option2}&culoare=${this.option3}`;
  //   // Deschideți fereastra modală, afișați o pagină de previzualizare sau utilizați o altă modalitate de afișare a PDF-ului.
  //   console.log('Previzualizare PDF:', pdfUrl);
  // }

}
