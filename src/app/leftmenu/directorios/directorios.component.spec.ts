import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoriosComponent } from './directorios.component';

describe('DirectoriosComponent', () => {
  let component: DirectoriosComponent;
  let fixture: ComponentFixture<DirectoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
