import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosyserviciosComponent } from './productosyservicios.component';

describe('ProductosyserviciosComponent', () => {
  let component: ProductosyserviciosComponent;
  let fixture: ComponentFixture<ProductosyserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosyserviciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
