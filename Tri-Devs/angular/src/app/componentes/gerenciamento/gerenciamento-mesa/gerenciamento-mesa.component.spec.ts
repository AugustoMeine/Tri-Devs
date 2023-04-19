import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoMesaComponent } from './gerenciamento-mesa.component';

describe('GerenciamentoMesaComponent', () => {
  let component: GerenciamentoMesaComponent;
  let fixture: ComponentFixture<GerenciamentoMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
