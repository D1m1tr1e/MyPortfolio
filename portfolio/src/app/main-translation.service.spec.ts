import { TestBed } from '@angular/core/testing';

import { MainTranslationService } from './main-translation.service';

describe('MainTranslationService', () => {
  let service: MainTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
