import { TestBed } from '@angular/core/testing';

import { GetReviewsService } from './get-reviews.service';

describe('GetReviewsService', () => {
  let service: GetReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
