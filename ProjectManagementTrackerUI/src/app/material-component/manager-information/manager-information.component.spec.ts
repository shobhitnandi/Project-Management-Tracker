import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerInformationComponent } from './manager-information.component';
import { MaterialModule } from 'src/app/material-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ManagerInformationComponent', () => {
  let component: ManagerInformationComponent;
  let fixture: ComponentFixture<ManagerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerInformationComponent],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,HttpClientTestingModule,
        MatDialogModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
