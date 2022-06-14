import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefatoComponent } from './artefato.component';

describe('ArtefatoComponent', () => {
  let component: ArtefatoComponent;
  let fixture: ComponentFixture<ArtefatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtefatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
