import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFormeComponent } from './dropdown-forme.component';

describe('DropdownFormeComponent', () => {
  let component: DropdownFormeComponent;
  let fixture: ComponentFixture<DropdownFormeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownFormeComponent]
    });
    fixture = TestBed.createComponent(DropdownFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
