import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeDetailService } from './employee-detail.service';
import { MatSnackBarModule } from '@angular/material';

describe('EmployeeDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      MatSnackBarModule],
    providers: [EmployeeDetailService]
  }));

  it('should be created', () => {
    const service: EmployeeDetailService = TestBed.get(EmployeeDetailService);
    expect(service).toBeTruthy();
  });

  it('should have getEmployeeList function', () => {
    const service: EmployeeDetailService = TestBed.get(EmployeeDetailService);
    expect(service.getEmployeeList).toBeTruthy();
  });

});
