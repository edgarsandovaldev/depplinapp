import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParafinadosComponent } from './parafinados.component';

describe('ParafinadosComponent', () => {
  let component: ParafinadosComponent;
  let fixture: ComponentFixture<ParafinadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParafinadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParafinadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
