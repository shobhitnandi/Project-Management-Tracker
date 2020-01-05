import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInformationComponent } from './employee-information.component';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('EmployeeInformationComponent', () => {
  let component: EmployeeInformationComponent;
  let fixture: ComponentFixture<EmployeeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeInformationComponent],
      imports: [BrowserAnimationsModule,MaterialModule,HttpClientTestingModule,MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
