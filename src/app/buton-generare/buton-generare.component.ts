import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-buton-generare',
  templateUrl: './buton-generare.component.html',
  styleUrls: ['./buton-generare.component.css']
})
export class ButonGenerareComponent {
  @Output() buttonClick = new EventEmitter<void>();
  pdfUrl: string = '';

  generateURLAndRedirect() {
    // Emite evenimentul buttonClick către componenta părinte
    this.buttonClick.emit();
  }
}
