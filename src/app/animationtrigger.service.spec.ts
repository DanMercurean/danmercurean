import { TestBed } from '@angular/core/testing';

import { AnimationTriggerService } from './animationtrigger.service';

describe('AnimationtriggerService', () => {
  let service: AnimationTriggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationTriggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
