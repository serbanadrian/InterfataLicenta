import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-buton-descarcare',
  templateUrl: './buton-descarcare.component.html',
  styleUrls: ['./buton-descarcare.component.css']
})
export class ButonDescarcareComponent {
  @Input() url: string = '';
  // onClick() {
  //   this.buttonClick.emit();
  // }
  downloadPDF() {
    const link = document.createElement('a');
    link.href = this.url;
    link.download = 'generate.pdf'; // Specifică numele fișierului PDF descărcat
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
