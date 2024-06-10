import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarProductoComponent } from './seleccionar-producto.component';

describe('SeleccionarProductoComponent', () => {
  let component: SeleccionarProductoComponent;
  let fixture: ComponentFixture<SeleccionarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeleccionarProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeleccionarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
