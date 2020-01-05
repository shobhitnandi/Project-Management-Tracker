import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeComponent],
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
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
