import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReviewFormComponent } from './new-review-form.component';

describe('NewReviewFormComponent', () => {
  let component: NewReviewFormComponent;
  let fixture: ComponentFixture<NewReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
