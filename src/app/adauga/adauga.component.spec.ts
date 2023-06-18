import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaComponent } from './adauga.component';

describe('AdaugaComponent', () => {
  let component: AdaugaComponent;
  let fixture: ComponentFixture<AdaugaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdaugaComponent]
    });
    fixture = TestBed.createComponent(AdaugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
