import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBicicletaComponent } from './lista-bicicleta.component';

describe('ListaBicicletaComponent', () => {
  let component: ListaBicicletaComponent;
  let fixture: ComponentFixture<ListaBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBicicletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
