import { TestBed } from '@angular/core/testing';

import { FilmDataService } from './film-data.service';

describe('FilmDataService', () => {
  let service: FilmDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
