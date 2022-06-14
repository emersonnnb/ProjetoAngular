import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDispositivosMoveisComponent } from './lista-dispositivos-moveis.component';

describe('ListaDispositivosMoveisComponent', () => {
  let component: ListaDispositivosMoveisComponent;
  let fixture: ComponentFixture<ListaDispositivosMoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDispositivosMoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDispositivosMoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
