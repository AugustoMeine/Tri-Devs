import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoItemComponent } from './gerenciamento-item.component';

describe('GerenciamentoItemComponent', () => {
  let component: GerenciamentoItemComponent;
  let fixture: ComponentFixture<GerenciamentoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
