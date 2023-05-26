import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCuloareComponent } from './dropdown-culoare.component';

describe('DropdownCuloareComponent', () => {
  let component: DropdownCuloareComponent;
  let fixture: ComponentFixture<DropdownCuloareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownCuloareComponent]
    });
    fixture = TestBed.createComponent(DropdownCuloareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
