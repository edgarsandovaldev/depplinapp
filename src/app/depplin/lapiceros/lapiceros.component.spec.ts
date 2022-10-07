import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapicerosComponent } from './lapiceros.component';

describe('LapicerosComponent', () => {
  let component: LapicerosComponent;
  let fixture: ComponentFixture<LapicerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapicerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapicerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
