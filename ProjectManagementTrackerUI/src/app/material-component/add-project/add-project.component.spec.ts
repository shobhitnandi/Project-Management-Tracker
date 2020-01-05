import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProjectComponent } from './add-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddProjectComponent],
      imports: [BrowserAnimationsModule,FormsModule,MaterialModule,HttpClientTestingModule,ReactiveFormsModule,MatDialogModule ],
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
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
