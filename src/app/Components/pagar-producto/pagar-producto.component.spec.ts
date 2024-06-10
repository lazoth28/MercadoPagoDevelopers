import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarProductoComponent } from './pagar-producto.component';

describe('PagarProductoComponent', () => {
  let component: PagarProductoComponent;
  let fixture: ComponentFixture<PagarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagarProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
