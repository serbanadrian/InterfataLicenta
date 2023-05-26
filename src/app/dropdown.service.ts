import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  private selectedValuesSubject = new BehaviorSubject<string[]>([]);

  setSelectedValue(componentId: string, value: string) {
    // // const selectedValues = this.selectedValuesSubject.value;
    // // selectedValues[componentId] = value;
    // this.selectedValuesSubject.next(selectedValues);
  }

  getSelectedValues() {
    return this.selectedValuesSubject.value;
  }
}
