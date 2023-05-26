import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownFormeComponent } from '../dropdown-forme/dropdown-forme.component';
import { DropdownCuloareComponent } from '../dropdown-culoare/dropdown-culoare.component';
import { ButonGenerareComponent } from '../buton-generare/buton-generare.component';

@Component({
  selector: 'app-parinte',
  templateUrl: './parinte.component.html',
  styleUrls: ['./parinte.component.css']
})
export class ParinteComponent {
  option1: string = '';
  option2: string = '';
  option3: string = '';
  onOption1Selected(option: string) {
    this.option1 = option;
  }

  onOption2Selected(option: string) {
    this.option2 = option;
  }

  onOption3Selected(option: string) {
    this.option3 = option;
  }

  generateURL() {
    const url = `http://example.com/${this.option1}/${this.option2}/${this.option3}`;
    // utilizează URL-ul generat pentru a realiza operații suplimentare
  }
  

}
