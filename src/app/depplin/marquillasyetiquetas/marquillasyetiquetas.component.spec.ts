import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquillasyetiquetasComponent } from './marquillasyetiquetas.component';

describe('MarquillasyetiquetasComponent', () => {
  let component: MarquillasyetiquetasComponent;
  let fixture: ComponentFixture<MarquillasyetiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarquillasyetiquetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarquillasyetiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
