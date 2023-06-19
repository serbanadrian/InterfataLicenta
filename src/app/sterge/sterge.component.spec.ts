import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergeComponent } from './sterge.component';

describe('StergeComponent', () => {
  let component: StergeComponent;
  let fixture: ComponentFixture<StergeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StergeComponent]
    });
    fixture = TestBed.createComponent(StergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
