import { Component,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-buton-descarcare',
  templateUrl: './buton-descarcare.component.html',
  styleUrls: ['./buton-descarcare.component.css']
})
export class ButonDescarcareComponent {
  @Input() url: string = '';

  constructor(private http: HttpClient) {}
  
  downloadPDF() {
    console.log('URL descărcare PDF:', this.url);

    this.http.get(this.url, { responseType: 'blob' }).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'generate.pdf';
      link.click();
    });


  }
}
