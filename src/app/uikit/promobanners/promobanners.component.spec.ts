import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromobannersComponent } from './promobanners.component';

describe('PromobannersComponent', () => {
  let component: PromobannersComponent;
  let fixture: ComponentFixture<PromobannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromobannersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromobannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
