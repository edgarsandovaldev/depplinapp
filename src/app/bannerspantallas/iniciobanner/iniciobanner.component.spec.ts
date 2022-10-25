import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciobannerComponent } from './iniciobanner.component';

describe('IniciobannerComponent', () => {
  let component: IniciobannerComponent;
  let fixture: ComponentFixture<IniciobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
