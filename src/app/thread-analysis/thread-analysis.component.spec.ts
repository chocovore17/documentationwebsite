import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadAnalysisComponent } from './thread-analysis.component';

describe('ThreadAnalysisComponent', () => {
  let component: ThreadAnalysisComponent;
  let fixture: ComponentFixture<ThreadAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
