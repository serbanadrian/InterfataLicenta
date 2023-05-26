import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-dropdown-forme',
  templateUrl: './dropdown-forme.component.html',
  styleUrls: ['./dropdown-forme.component.css']
})
export class DropdownFormeComponent {
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string ='';
  options = [
    { label: 'Patrat', value: 'Patrate' },
    { label: 'Cerc', value: 'Cercuri' },
    { label: 'Triunghi', value: 'Triunghiuri' },
    { label: 'Spirala', value: 'Spirale' }
  ];

  onOptionSelected() {
    this.optionSelected.emit(this.selectedOption);
  }

}
