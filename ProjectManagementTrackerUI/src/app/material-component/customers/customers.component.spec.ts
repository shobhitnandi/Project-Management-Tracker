import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersComponent],
      imports: [BrowserAnimationsModule,FormsModule,HttpClientTestingModule,MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
