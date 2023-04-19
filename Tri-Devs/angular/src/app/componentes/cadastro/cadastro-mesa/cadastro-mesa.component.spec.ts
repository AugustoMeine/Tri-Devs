import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMesaComponent } from './cadastro-mesa.component';

describe('CadastroMesaComponent', () => {
  let component: CadastroMesaComponent;
  let fixture: ComponentFixture<CadastroMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
