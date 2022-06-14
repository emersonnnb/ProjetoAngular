import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtivoFinanceiroComponent } from './lista-ativo-financeiro.component';

describe('ListaAtivoFinanceiroComponent', () => {
  let component: ListaAtivoFinanceiroComponent;
  let fixture: ComponentFixture<ListaAtivoFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAtivoFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtivoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
