import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarComandaComponent } from './visualizar-comanda.component';

describe('VisualizarComandaComponent', () => {
  let component: VisualizarComandaComponent;
  let fixture: ComponentFixture<VisualizarComandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarComandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
