import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArtefatoComponent } from './lista-artefato.component';

describe('ListaArtefatoComponent', () => {
  let component: ListaArtefatoComponent;
  let fixture: ComponentFixture<ListaArtefatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArtefatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArtefatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
