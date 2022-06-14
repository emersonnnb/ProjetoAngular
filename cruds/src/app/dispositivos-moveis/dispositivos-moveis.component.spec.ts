import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DispositivosMoveisComponent } from './dispositivos-moveis.component';
import {MatRadioModule} from '@angular/material/radio';




describe('DispositivosMoveisComponent', () => {
  let component: DispositivosMoveisComponent;
  let fixture: ComponentFixture<DispositivosMoveisComponent>;



beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivosMoveisComponent ];
      MatRadioModule
    })
    .compileComponents();
  });

  
  
  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivosMoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
