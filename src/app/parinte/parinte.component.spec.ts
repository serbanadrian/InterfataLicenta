import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParinteComponent } from './parinte.component';

describe('ParinteComponent', () => {
  let component: ParinteComponent;
  let fixture: ComponentFixture<ParinteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParinteComponent]
    });
    fixture = TestBed.createComponent(ParinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
