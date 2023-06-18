import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-adauga',
  templateUrl: './adauga.component.html',
  styleUrls: ['./adauga.component.css']
})
export class AdaugaComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
  
}
