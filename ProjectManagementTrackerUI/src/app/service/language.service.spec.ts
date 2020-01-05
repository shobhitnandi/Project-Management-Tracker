import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('LanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      ]
  }));

  it('should be created', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service).toBeTruthy();
  });
});
