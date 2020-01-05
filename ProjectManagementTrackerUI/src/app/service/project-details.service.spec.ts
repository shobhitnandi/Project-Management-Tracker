import { TestBed } from '@angular/core/testing';
import { ProjectDetailsService } from './project-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';

describe('ProjectDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,
      MatSnackBarModule],
    providers: [ProjectDetailsService]
  }));

  it('should be created', () => {
    const service: ProjectDetailsService = TestBed.get(ProjectDetailsService);
    expect(service).toBeTruthy();
  });
});
