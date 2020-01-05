import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignProjectComponent } from './assign-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AssignProjectComponent', () => {
  let component: AssignProjectComponent;
  let fixture: ComponentFixture<AssignProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignProjectComponent ],
      imports: [BrowserAnimationsModule,FormsModule,MaterialModule,HttpClientTestingModule,ReactiveFormsModule,MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProjectComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
