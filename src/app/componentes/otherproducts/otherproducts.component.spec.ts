import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherproductsComponent } from './otherproducts.component';

describe('OtherproductsComponent', () => {
  let component: OtherproductsComponent;
  let fixture: ComponentFixture<OtherproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
