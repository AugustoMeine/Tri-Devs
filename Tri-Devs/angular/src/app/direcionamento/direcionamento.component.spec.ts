import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecionamentoComponent } from './direcionamento.component';

describe('DirecionamentoComponent', () => {
  let component: DirecionamentoComponent;
  let fixture: ComponentFixture<DirecionamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecionamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirecionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
