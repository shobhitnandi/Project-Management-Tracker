import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { MatSnackBarModule } from '@angular/material';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [MatSnackBarModule]
  }));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});
