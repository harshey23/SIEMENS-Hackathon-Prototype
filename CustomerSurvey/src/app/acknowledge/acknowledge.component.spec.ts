import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgeComponent } from './acknowledge.component';

describe('AcknowledgeComponent', () => {
  let component: AcknowledgeComponent;
  let fixture: ComponentFixture<AcknowledgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcknowledgeComponent]
    });
    fixture = TestBed.createComponent(AcknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
