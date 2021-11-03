import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitChecklistComponent } from './visit-checklist.component';

describe('VisitChecklistComponent', () => {
  let component: VisitChecklistComponent;
  let fixture: ComponentFixture<VisitChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
