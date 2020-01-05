import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfCustomerComponent } from './list-of-customer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListOfCustomerComponent', () => {
  let component: ListOfCustomerComponent;
  let fixture: ComponentFixture<ListOfCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfCustomerComponent],
      imports: [BrowserAnimationsModule,FormsModule,HttpClientTestingModule,MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
