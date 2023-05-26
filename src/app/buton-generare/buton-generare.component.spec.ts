import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonGenerareComponent } from './buton-generare.component';

describe('ButonGenerareComponent', () => {
  let component: ButonGenerareComponent;
  let fixture: ComponentFixture<ButonGenerareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButonGenerareComponent]
    });
    fixture = TestBed.createComponent(ButonGenerareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
