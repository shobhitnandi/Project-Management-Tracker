import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('CustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,
      MatSnackBarModule],
    providers: [CustomerService]
  }));

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });
});
