import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryworksComponent } from './galeryworks.component';

describe('GaleryworksComponent', () => {
  let component: GaleryworksComponent;
  let fixture: ComponentFixture<GaleryworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
