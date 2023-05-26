import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonDescarcareComponent } from './buton-descarcare.component';

describe('ButonDescarcareComponent', () => {
  let component: ButonDescarcareComponent;
  let fixture: ComponentFixture<ButonDescarcareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButonDescarcareComponent]
    });
    fixture = TestBed.createComponent(ButonDescarcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
