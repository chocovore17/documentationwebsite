import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFeaturesComponent } from './advanced-features.component';

describe('AdvancedFeaturesComponent', () => {
  let component: AdvancedFeaturesComponent;
  let fixture: ComponentFixture<AdvancedFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
