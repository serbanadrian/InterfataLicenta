import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sterge',
  templateUrl: './sterge.component.html',
  styleUrls: ['./sterge.component.css']
})
export class StergeComponent {
  @Output() buttonClickSterge = new EventEmitter<void>();

  onButtonClickSterge() {
    this.buttonClickSterge.emit();
  }

}
