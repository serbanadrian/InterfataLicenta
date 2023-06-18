import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
  @Output() nameChange = new EventEmitter<string>();
  personName: string = '';

  onInputChange(event: any) {
    this.nameChange.emit(event.target.value);
  }
}
