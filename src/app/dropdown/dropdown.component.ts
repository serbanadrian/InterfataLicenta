import { Component, Input, EventEmitter, Output  } from '@angular/core';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  // @Input() componentId: string ='';
  @Output() optionSelected = new EventEmitter<string>();
    selectedOption: string ='';
  options = [
    { label: 'Invatarea cifrei 1', value: '1' },
    { label: 'Invatarea cifrei 2', value: '2' },
    { label: 'Invatarea cifrei 3', value: '3' },
    { label: 'Invatarea cifrei 4', value: '4' },
    { label: 'Invatarea cifrei 5', value: '5' },
    { label: 'Invatarea cifrei 6', value: '6' },
    { label: 'Invatarea cifrei 7', value: '7' },
    { label: 'Invatarea cifrei 8', value: '8' },
    { label: 'Invatarea cifrei 9', value: '9' },
    { label: 'Invatarea numarului 10', value: '10' }
  ];

  constructor(){}

  onOptionSelected() {
    
    this.optionSelected.emit(this.selectedOption);
  }
 
}
