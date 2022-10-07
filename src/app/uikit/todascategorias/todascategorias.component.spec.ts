import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodascategoriasComponent } from './todascategorias.component';

describe('TodascategoriasComponent', () => {
  let component: TodascategoriasComponent;
  let fixture: ComponentFixture<TodascategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodascategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodascategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
