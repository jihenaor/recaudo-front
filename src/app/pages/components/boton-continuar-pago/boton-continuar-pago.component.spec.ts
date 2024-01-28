import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonContinuarPagoComponent } from './boton-continuar-pago.component';

describe('BotonContinuarPagoComponent', () => {
  let component: BotonContinuarPagoComponent;
  let fixture: ComponentFixture<BotonContinuarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonContinuarPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonContinuarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
