import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosrealizadosComponent } from './trabajosrealizados.component';

describe('TrabajosrealizadosComponent', () => {
  let component: TrabajosrealizadosComponent;
  let fixture: ComponentFixture<TrabajosrealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosrealizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosrealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
