import { TestBed } from '@angular/core/testing';
import { ManagerDetailService } from './manager-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('ManagerDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,
      MatSnackBarModule],
    providers: [ManagerDetailService]
  }));

  it('should be created', () => {
    const service: ManagerDetailService = TestBed.get(ManagerDetailService);
    expect(service).toBeTruthy();
  });
});
