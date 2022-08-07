import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricsComponent } from './biometrics.component';

describe('BiometricsComponent', () => {
  let component: BiometricsComponent;
  let fixture: ComponentFixture<BiometricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiometricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
