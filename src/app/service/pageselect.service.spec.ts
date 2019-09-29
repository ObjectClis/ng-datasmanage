import { TestBed } from '@angular/core/testing';

import { PageselectService } from './pageselect.service';

describe('PageselectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageselectService = TestBed.get(PageselectService);
    expect(service).toBeTruthy();
  });
});
