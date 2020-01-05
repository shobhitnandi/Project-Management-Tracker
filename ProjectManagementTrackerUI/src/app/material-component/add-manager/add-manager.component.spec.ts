import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerComponent } from './add-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddManagerComponent', () => {
  let component: AddManagerComponent;
  let fixture: ComponentFixture<AddManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddManagerComponent],
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
    fixture = TestBed.createComponent(AddManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
