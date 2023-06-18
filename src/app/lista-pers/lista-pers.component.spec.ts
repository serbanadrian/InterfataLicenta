import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersComponent } from './lista-pers.component';

describe('ListaPersComponent', () => {
  let component: ListaPersComponent;
  let fixture: ComponentFixture<ListaPersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPersComponent]
    });
    fixture = TestBed.createComponent(ListaPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
