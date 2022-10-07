import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModosdepagoComponent } from './modosdepago.component';

describe('ModosdepagoComponent', () => {
  let component: ModosdepagoComponent;
  let fixture: ComponentFixture<ModosdepagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModosdepagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModosdepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
