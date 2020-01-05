import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjectInformationComponent } from './assign-project-information.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AssignProjectInformationComponent', () => {
  let component: AssignProjectInformationComponent;
  let fixture: ComponentFixture<AssignProjectInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignProjectInformationComponent ],
      imports: [BrowserAnimationsModule,FormsModule,MaterialModule,HttpClientTestingModule,MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProjectInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
