import { TestBed, inject } from '@angular/core/testing';

import { TvshowService } from './tvshow.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TvshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule],
    providers: [TvshowService]
  }));

  it('should be created', inject([TvshowService], (service: TvshowService) => {
    expect(service).toBeTruthy()
  }) );
});
