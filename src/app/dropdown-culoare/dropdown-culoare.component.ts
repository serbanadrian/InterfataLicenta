import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-dropdown-culoare',
  templateUrl: './dropdown-culoare.component.html',
  styleUrls: ['./dropdown-culoare.component.css']
})
export class DropdownCuloareComponent {
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string ='';
  options = [
    { label: 'Rosu', value: 'rosii' },
    { label: 'Galben', value: 'galbene' },
    { label: 'Albastru', value: 'albastre' },
    { label: 'Verde', value: 'verzi' },
    { label: 'Roz', value: 'roz'}
  ];

  onOptionSelected() {
    this.optionSelected.emit(this.selectedOption);
  }

}
