import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectInformationComponent } from './project-information.component';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectInformationComponent', () => {
  let component: ProjectInformationComponent;
  let fixture: ComponentFixture<ProjectInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectInformationComponent],
      imports: [BrowserAnimationsModule,MaterialModule,HttpClientTestingModule,MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
