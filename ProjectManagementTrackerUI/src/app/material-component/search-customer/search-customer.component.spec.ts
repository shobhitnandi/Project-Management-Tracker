import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCustomerComponent } from './search-customer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchCustomerComponent', () => {
  let component: SearchCustomerComponent;
  let fixture: ComponentFixture<SearchCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCustomerComponent],
      imports: [BrowserAnimationsModule,FormsModule,HttpClientTestingModule,MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
