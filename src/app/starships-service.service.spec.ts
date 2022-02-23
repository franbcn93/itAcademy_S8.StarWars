import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StarshipsServiceService } from './starships-service.service';

describe('StarshipsServiceService', () => {
  let service: StarshipsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipsServiceService);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]      
    }).compileComponents();
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
