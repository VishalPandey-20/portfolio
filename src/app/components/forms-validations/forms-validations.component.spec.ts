import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValidationsComponent } from './forms-validations.component';

describe('FormsValidationsComponent', () => {
  let component: FormsValidationsComponent;
  let fixture: ComponentFixture<FormsValidationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsValidationsComponent]
    });
    fixture = TestBed.createComponent(FormsValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
