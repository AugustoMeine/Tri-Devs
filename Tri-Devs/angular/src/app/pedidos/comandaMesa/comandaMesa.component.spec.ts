import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandaMesaComponent } from './comandaMesa.component';

describe('ComandaMesaComponent', () => {
  let component: ComandaMesaComponent;
  let fixture: ComponentFixture<ComandaMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandaMesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComandaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
