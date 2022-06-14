import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOutrosComponent } from './lista-outros.component';

describe('ListaOutrosComponent', () => {
  let component: ListaOutrosComponent;
  let fixture: ComponentFixture<ListaOutrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOutrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOutrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
