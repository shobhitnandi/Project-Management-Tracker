import { TestBed } from '@angular/core/testing';

import { AssignProjectService } from './assign-project.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('AssignProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      MatSnackBarModule],
    providers: [AssignProjectService]
  }));

  it('should be created', () => {
    const service: AssignProjectService = TestBed.get(AssignProjectService);
    expect(service).toBeTruthy();
  });
});
